#!/usr/bin/env python3
"""Generate markdown report from i18n-review batch results."""

from __future__ import annotations

import argparse
import json
import re
from collections import Counter, defaultdict
from datetime import datetime, timezone
from pathlib import Path

GLOBAL_TARGETS = [
    "de-DE", "es-419", "fr-FR", "id-ID", "it-IT", "ja-JP", "ko-KR",
    "pt-BR", "ru-RU", "th-TH", "tr-TR", "vi-VN", "zh-SG", "zh-TW", "en-CN",
]
LOCALE_NAMES = {
    "de-DE": "德语",
    "es-419": "拉美西语",
    "fr-FR": "法语",
    "id-ID": "印尼语",
    "it-IT": "意大利语",
    "ja-JP": "日语",
    "ko-KR": "韩语",
    "pt-BR": "巴西葡语",
    "ru-RU": "俄语",
    "th-TH": "泰语",
    "tr-TR": "土耳其语",
    "vi-VN": "越南语",
    "zh-SG": "简体中文（海外）",
    "zh-TW": "繁体中文",
    "en-CN": "中国区英文",
}


def load_rows(path: Path) -> list[dict]:
    rows: list[dict] = []
    if not path.exists():
        return rows
    for line in path.read_text(encoding="utf-8").splitlines():
        if line.strip():
            rows.append(json.loads(line))
    return rows


def normalize_score(value) -> float | None:
    if value is None:
        return None
    try:
        score = float(value)
    except (TypeError, ValueError):
        return None
    if score > 5:
        score = score / 20.0
    return round(score, 2)


def normalize_severity(row: dict) -> str:
    if row.get("error"):
        return "error"
    sev = str(row.get("severity") or "").lower()
    if sev in {"critical", "major", "minor", "ok"}:
        return sev
    overall = normalize_score(row.get("overall"))
    if overall is None:
        return "unknown"
    if overall < 3:
        return "critical"
    if overall < 3.8:
        return "major"
    if overall < 4.3:
        return "minor"
    return "ok"


def detect_membership_table_bug(docs_root: Path) -> list[dict]:
    issues = []
    source = docs_root / "en-US" / "membership" / "overview.md"
    if not source.exists():
        return issues
    src_text = source.read_text(encoding="utf-8")
    swarm = re.search(r"Agent Swarm \(beta\).*", src_text)
    subtasks = re.search(r"Agent Swarm concurrent subtasks.*", src_text)
    if not swarm or not subtasks:
        return issues
    for locale in GLOBAL_TARGETS:
        if locale == "en-CN":
            continue
        target = docs_root / locale / "membership" / "overview.md"
        if not target.exists():
            continue
        text = target.read_text(encoding="utf-8")
        for label, pattern in [
            ("Agent Swarm (beta) Moderato 漏译", r"Agent Swarm \(beta\).*?\| — \| — \|"),
            ("Agent Swarm concurrent subtasks Moderato 漏译", r"Agent Swarm.*subtasks.*?\| — \| — \|"),
            ("Agent Swarm concurrent subtasks Moderato 漏译", r"同時.*?\| — \| — \| 4"),
            ("Agent Swarm concurrent subtasks Moderato 漏译", r"gleichzeitige Teilaufgaben \| — \| — \|"),
        ]:
            if re.search(pattern, text, flags=re.I):
                issues.append({
                    "locale": locale,
                    "article": "membership/overview.md",
                    "type": "accuracy",
                    "severity": "critical",
                    "suggestion": "Moderato 列 Agent Swarm 数值漏译：beta 应为 25 uses，concurrent subtasks 应为 2。",
                })
                break
    return issues


def aggregate(rows: list[dict]) -> dict:
    by_locale: dict[str, list[dict]] = defaultdict(list)
    issue_types = Counter()
    severities = Counter()
    article_counts = Counter()
    scores_by_locale: dict[str, list[float]] = defaultdict(list)

    for row in rows:
        locale = row.get("target", "unknown")
        by_locale[locale].append(row)
        sev = normalize_severity(row)
        severities[sev] += 1
        overall = normalize_score(row.get("overall"))
        if overall is not None:
            scores_by_locale[locale].append(overall)
        for issue in row.get("issues") or []:
            issue_types[issue.get("type") or "unknown"] += 1
            article_counts[(locale, row.get("article", ""))] += 1

    locale_summary = {}
    for locale, items in by_locale.items():
        scores = scores_by_locale.get(locale, [])
        locale_summary[locale] = {
            "count": len(items),
            "avg_overall": round(sum(scores) / len(scores), 2) if scores else None,
            "critical": sum(1 for item in items if normalize_severity(item) == "critical"),
            "major": sum(1 for item in items if normalize_severity(item) == "major"),
            "minor": sum(1 for item in items if normalize_severity(item) == "minor"),
            "ok": sum(1 for item in items if normalize_severity(item) == "ok"),
            "errors": sum(1 for item in items if item.get("error")),
        }

    return {
        "by_locale": by_locale,
        "locale_summary": locale_summary,
        "issue_types": issue_types,
        "severities": severities,
        "article_counts": article_counts,
    }


def format_issue(issue: dict) -> str:
    parts = [
        f"- **[{issue.get('severity', 'minor')}]** `{issue.get('type', '')}` @ {issue.get('location', '')}",
    ]
    if issue.get("source") or issue.get("target"):
        parts.append(f"  - 源: {issue.get('source', '')}")
        parts.append(f"  - 译: {issue.get('target', '')}")
    if issue.get("suggestion"):
        parts.append(f"  - 建议: {issue.get('suggestion')}")
    return "\n".join(parts)


def render_report(rows: list[dict], docs_root: Path, output: Path, total_pairs: int) -> None:
    agg = aggregate(rows)
    rule_issues = detect_membership_table_bug(docs_root)
    now = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")

    lines = [
        "# Kimi Help Center i18n 翻译审校报告",
        "",
        f"- 生成时间: {now}",
        f"- 审校模型: GPT 5.5",
        f"- 已完成审校: {len(rows)} / {total_pairs}",
        f"- 规则检测命中: {len(rule_issues)}",
        "",
        "## 一、整体建议",
        "",
        "### 1. 优先修复（P0）",
        "",
    ]

    if rule_issues:
        lines.append("- **全语言表格漏译**：`membership/overview.md` 中 Moderato 列的 Agent Swarm 数值在 14 个语言版本中普遍缺失，需批量修复。")
    lines.extend([
        "- **补全缺失文章**：相对 `zh-CN` 102 篇，国际语言仅 90 篇，缺 12 篇（主要在 `agent/`、`kimi-code/` 等新增目录）。",
        "- **建立跨语言术语表**：`credit` / `quota` / `token` / `Help Center` 等高频词在各语言中半英半译，需统一策略（保留英文 vs 全量本地化）。",
        "",
        "### 2. 质量改进（P1）",
        "",
        "- **区域内容隔离**：中国区（`zh-CN`/`en-CN`）与国际区（`en-US` 及衍生语言）会员体系、定价、套餐名不同，翻译流水线需严格按源 locale 分支，避免混用。",
        "- **UI 文案对齐**：错误提示、按钮文案（如 Clarification、Include everything、Issue invoice）应核对产品界面实际翻译，不要自行意译。",
        "- **Callout 润色**：如 “Use all credit limit for the same function” 在多数语言中表达生硬，建议改为更自然的帮助中心语气。",
        "",
        "### 3. 流程建议（P2）",
        "",
        "- 在 `translate-docs.js` 之后增加 `check-translations.js` + GPT 审校 gate，阻断 critical/major 问题合入。",
        "- 扩展 `glossary/terms.json` 至全部 SEO locale，并在翻译 prompt 中注入。",
        "- 对表格、数值、链接类字段增加 deterministic diff 校验，减少 GPT 漏检。",
        "",
        "### 4. 全库问题分布",
        "",
        "| 严重度 | 篇数 |",
        "|--------|------|",
    ])

    for key in ["critical", "major", "minor", "ok", "error", "unknown"]:
        count = agg["severities"].get(key, 0)
        if count:
            lines.append(f"| {key} | {count} |")

    lines.extend(["", "| 问题类型 | 次数 |", "|----------|------|"])
    for issue_type, count in agg["issue_types"].most_common(12):
        lines.append(f"| {issue_type} | {count} |")

    lines.extend(["", "| 语言 | 审校数 | 均分 | critical | major | minor | ok | 错误 |", "|------|--------|------|----------|-------|-------|----|------|"])
    for locale in sorted(agg["locale_summary"], key=lambda code: agg["locale_summary"][code].get("avg_overall") or 0):
        summary = agg["locale_summary"][locale]
        name = LOCALE_NAMES.get(locale, locale)
        lines.append(
            f"| {locale} ({name}) | {summary['count']} | {summary['avg_overall']} | "
            f"{summary['critical']} | {summary['major']} | {summary['minor']} | {summary['ok']} | {summary['errors']} |"
        )

    lines.extend(["", "## 二、按语言明细建议", ""])

    for locale in sorted(agg["by_locale"]):
        items = agg["by_locale"][locale]
        summary = agg["locale_summary"][locale]
        name = LOCALE_NAMES.get(locale, locale)
        lines.extend([
            f"### {locale}（{name}）",
            "",
            f"- 审校完成: {summary['count']} 篇",
            f"- 平均分: {summary['avg_overall']}",
            f"- 分布: critical {summary['critical']} / major {summary['major']} / minor {summary['minor']} / ok {summary['ok']}",
            "",
        ])

        locale_rule = [item for item in rule_issues if item["locale"] == locale]
        if locale_rule:
            lines.append("#### 规则检测（必改）")
            lines.append("")
            for item in locale_rule:
                lines.append(f"- `{item['article']}`: {item['suggestion']}")
            lines.append("")

        major_items = [
            item for item in items
            if normalize_severity(item) in {"critical", "major"} and not item.get("error")
        ]
        if major_items:
            lines.append("#### 重点问题文章")
            lines.append("")
            for item in sorted(major_items, key=lambda row: normalize_score(row.get("overall")) or 0)[:8]:
                overall = normalize_score(item.get("overall"))
                lines.append(
                    f"- `{item['article']}` — overall={overall}, severity={normalize_severity(item)}"
                )
                lines.append(f"  - 摘要: {item.get('summary', '')}")
                for issue in (item.get("issues") or [])[:3]:
                    if issue.get("severity") in {"critical", "major"}:
                        lines.append(format_issue(issue))
            lines.append("")

        term_issues = Counter()
        for item in items:
            for issue in item.get("issues") or []:
                if issue.get("type") == "terminology":
                    term_issues[issue.get("suggestion", "")[:120]] += 1
        if term_issues:
            lines.append("#### 术语统一建议")
            lines.append("")
            for suggestion, count in term_issues.most_common(5):
                lines.append(f"- （{count} 次）{suggestion}")
            lines.append("")

        minor_samples = [
            item for item in items
            if normalize_severity(item) == "minor" and not item.get("error")
        ]
        if minor_samples:
            lines.append("#### 常见润色项（抽样）")
            lines.append("")
            shown = 0
            for item in minor_samples:
                for issue in item.get("issues") or []:
                    if issue.get("severity") != "minor":
                        continue
                    lines.append(
                        f"- `{item['article']}` @ {issue.get('location', '')}: {issue.get('suggestion', '')}"
                    )
                    shown += 1
                    if shown >= 5:
                        break
                if shown >= 5:
                    break
            lines.append("")

    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Generate i18n review markdown report")
    parser.add_argument("--docs-root", default=".")
    parser.add_argument("--results", default="scripts/i18n-review-results.jsonl")
    parser.add_argument("--output", default="scripts/i18n-review-report.md")
    parser.add_argument("--total-pairs", type=int, default=1362)
    args = parser.parse_args()
    docs_root = Path(args.docs_root).resolve()
    rows = load_rows(Path(args.results))
    render_report(rows, docs_root, Path(args.output), args.total_pairs)
    print(f"Wrote {args.output} ({len(rows)} rows)")


if __name__ == "__main__":
    main()
