#!/usr/bin/env python3
"""Batch GPT translation review for Kimi Help Center i18n docs."""

from __future__ import annotations

import argparse
import json
import os
import re
import ssl
import threading
import time
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path

API_BASE = os.environ.get("LLM_API_BASE", "https://openai.app.msh.team/v1").rstrip("/")
MODEL = os.environ.get("LLM_MODEL", "gpt-5.5")
API_KEY = os.environ.get("OPENAI_API_KEY") or os.environ.get("LLM_API_KEY")
GLOBAL_SRC = "en-US"
CN_SRC = "zh-CN"
GLOBAL_TARGETS = [
    "de-DE", "es-419", "fr-FR", "id-ID", "it-IT", "ja-JP", "ko-KR",
    "pt-BR", "ru-RU", "th-TH", "tr-TR", "vi-VN", "zh-SG", "zh-TW",
]
MAX_CONTENT_CHARS = 5200
MAX_TOKENS = 2000
TEMPERATURE = 0.2

CTX = ssl.create_default_context()
CTX.check_hostname = False
CTX.verify_mode = ssl.CERT_NONE

write_lock = threading.Lock()


def row_key(row: dict) -> str:
    return f"{row['source']}|{row['target']}|{row['article']}"


def load_results(results_path: Path) -> dict[str, dict]:
    rows: dict[str, dict] = {}
    if not results_path.exists():
        return rows
    for line in results_path.read_text(encoding="utf-8").splitlines():
        if not line.strip():
            continue
        try:
            row = json.loads(line)
            rows[row_key(row)] = row
        except json.JSONDecodeError:
            continue
    return rows


def load_done_keys(results_path: Path, *, include_errors: bool = False) -> set[str]:
    rows = load_results(results_path)
    if include_errors:
        return set(rows)
    return {key for key, row in rows.items() if not row.get("error")}


def write_results(results_path: Path, rows: dict[str, dict]) -> None:
    results_path.parent.mkdir(parents=True, exist_ok=True)
    ordered = sorted(rows.values(), key=lambda row: (row.get("target", ""), row.get("article", "")))
    results_path.write_text(
        "\n".join(json.dumps(row, ensure_ascii=False) for row in ordered) + "\n",
        encoding="utf-8",
    )


def strip_doc(text: str) -> str:
    text = re.sub(r"^---\n.*?\n---\n", "", text, count=1, flags=re.S)
    text = re.sub(r"<CodePreview[\s\S]*?/>", "[CodePreview]", text)
    text = re.sub(r"<VideoList[\s\S]*?/>", "[VideoList]", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    if len(text) > MAX_CONTENT_CHARS:
        text = text[:MAX_CONTENT_CHARS] + "\n...[truncated for review]"
    return text.strip()


def list_pairs(docs_root: Path) -> list[dict]:
    pairs: list[dict] = []
    en_root = docs_root / GLOBAL_SRC
    cn_root = docs_root / CN_SRC
    en_files = sorted(p.relative_to(en_root).as_posix() for p in en_root.rglob("*.md"))
    cn_files = sorted(p.relative_to(cn_root).as_posix() for p in cn_root.rglob("*.md"))
    for article in en_files:
        for target in GLOBAL_TARGETS:
            if (docs_root / target / article).exists():
                pairs.append({"article": article, "source": GLOBAL_SRC, "target": target})
    for article in cn_files:
        if (docs_root / "en-CN" / article).exists():
            pairs.append({"article": article, "source": CN_SRC, "target": "en-CN"})
    return pairs


def call_gpt(prompt: str, retries: int = 5) -> dict:
    payload = {
        "model": MODEL,
        "messages": [
            {
                "role": "system",
                "content": (
                    "你是 Kimi 帮助中心多语言文档审校专家。"
                    "只输出一个合法 JSON 对象，不要 markdown 代码块，不要额外说明。"
                ),
            },
            {"role": "user", "content": prompt},
        ],
        "temperature": TEMPERATURE,
        "max_tokens": MAX_TOKENS,
    }
    last_error = ""
    for attempt in range(retries):
        try:
            req = urllib.request.Request(
                f"{API_BASE}/chat/completions",
                data=json.dumps(payload).encode(),
                headers={
                    "Authorization": f"Bearer {API_KEY}",
                    "Content-Type": "application/json",
                },
                method="POST",
            )
            with urllib.request.urlopen(req, context=CTX, timeout=180) as resp:
                body = json.loads(resp.read())
            content = (body["choices"][0]["message"].get("content") or "").strip()
            if not content:
                raise ValueError("empty response content")
            match = re.search(r"\{[\s\S]*\}", content)
            if not match:
                raise ValueError(f"no JSON in response: {content[:200]}")
            return json.loads(match.group())
        except (urllib.error.URLError, TimeoutError, ValueError, json.JSONDecodeError, KeyError) as exc:
            last_error = str(exc)
            time.sleep(min(2 ** attempt, 10))
    raise RuntimeError(last_error)


def review_pair(docs_root: Path, pair: dict) -> dict:
    src_path = docs_root / pair["source"] / pair["article"]
    tgt_path = docs_root / pair["target"] / pair["article"]
    src = strip_doc(src_path.read_text(encoding="utf-8"))
    tgt = strip_doc(tgt_path.read_text(encoding="utf-8"))
    prompt = f"""审校 Kimi 帮助中心文档翻译，给出可执行的修改建议。

源语言: {pair['source']}
目标语言: {pair['target']}
文章: {pair['article']}

【源文】
{src}

【译文】
{tgt}

评估维度（1-5）: accuracy, terminology, fluency, tone, structure
severity: critical | major | minor | ok

issues 最多 6 条，每条包含:
type, location, source, target, suggestion, severity

输出 JSON:
{{
  "scores": {{"accuracy":0,"terminology":0,"fluency":0,"tone":0,"structure":0}},
  "overall": 0,
  "severity": "critical|major|minor|ok",
  "issues": [{{"type":"","location":"","source":"","target":"","suggestion":"","severity":""}}],
  "highlights": ["..."],
  "summary": "一句话"
}}
"""
    result = call_gpt(prompt)
    result.update(pair)
    return result


def run_batch(
    docs_root: Path,
    results_path: Path,
    concurrency: int,
    limit: int | None,
    *,
    retry_errors: bool = False,
) -> None:
    if not API_KEY:
        raise SystemExit("OPENAI_API_KEY or LLM_API_KEY is required")

    pairs = list_pairs(docs_root)
    stored = load_results(results_path)

    if retry_errors:
        error_keys = {key for key, row in stored.items() if row.get("error")}
        for key in error_keys:
            stored.pop(key, None)
        pending = [pair for pair in pairs if row_key(pair) in error_keys]
        print(f"retry-errors={len(pending)} model={MODEL}", flush=True)
    else:
        done = load_done_keys(results_path)
        pending = [pair for pair in pairs if row_key(pair) not in done]
        print(f"total={len(pairs)} done={len(done)} pending={len(pending)} model={MODEL}", flush=True)

    if limit is not None:
        pending = pending[:limit]
    if not pending:
        print("nothing to do", flush=True)
        return

    completed = 0
    failed = 0

    with ThreadPoolExecutor(max_workers=concurrency) as pool:
        futures = {pool.submit(review_pair, docs_root, pair): pair for pair in pending}
        for future in as_completed(futures):
            pair = futures[future]
            key = row_key(pair)
            try:
                row = future.result()
                stored[key] = row
                write_results(results_path, stored)
                completed += 1
                print(
                    f"OK [{completed + failed}/{len(pending)}] {key} "
                    f"overall={row.get('overall')} severity={row.get('severity')}",
                    flush=True,
                )
            except Exception as exc:
                failed += 1
                stored[key] = {**pair, "error": str(exc)}
                write_results(results_path, stored)
                print(f"ERR [{completed + failed}/{len(pending)}] {key} {exc}", flush=True)

    print(f"finished completed={completed} failed={failed}", flush=True)


def main() -> None:
    parser = argparse.ArgumentParser(description="Batch GPT translation review")
    parser.add_argument("--docs-root", default=".", help="Repository root")
    parser.add_argument(
        "--results",
        default="scripts/i18n-review-results.jsonl",
        help="JSONL output path",
    )
    parser.add_argument("--concurrency", type=int, default=8)
    parser.add_argument("--limit", type=int, default=None, help="Only review first N pending pairs")
    parser.add_argument(
        "--retry-errors",
        action="store_true",
        help="Re-run only rows that previously failed with API errors",
    )
    args = parser.parse_args()
    run_batch(
        Path(args.docs_root).resolve(),
        Path(args.results),
        args.concurrency,
        args.limit,
        retry_errors=args.retry_errors,
    )


if __name__ == "__main__":
    main()
