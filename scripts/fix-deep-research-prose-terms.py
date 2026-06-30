#!/usr/bin/env python3
"""Apply bilingual Clarification (local) wording in Deep Research prose."""

from __future__ import annotations

import argparse
import re
from pathlib import Path

# Keep in sync with fix-deep-research-pipeline-terms.py
CLARIFICATION_LOCAL: dict[str, str] = {
    "de-DE": "Absichtsklärung",
    "es-419": "Aclaración de intención",
    "fr-FR": "Clarification de l'intention",
    "it-IT": "Chiarimento dell'intento",
    "id-ID": "Klarifikasi intent",
    "vi-VN": "Làm rõ ý định",
    "pt-BR": "Esclarecimento de intenção",
    "ko-KR": "의도 명확화",
    "tr-TR": "Niyet netleştirme",
    "th-TH": "การชี้แจงเจตนา",
    "ru-RU": "Уточнение намерения",
    "ja-JP": "意図の明確化",
}

INTL_LOCALES = list(CLARIFICATION_LOCAL.keys())

EN_CN_REPLACEMENTS: list[tuple[str, str]] = [
    (
        "- Clarification (澄清): proactively asks follow-up questions while understanding the task, building a clearer problem space;",
        "- Clarification (意图澄清): proactively asks follow-up questions while understanding the task, building a clearer problem space;",
    ),
    (
        "- Iterative reasoning (迭代推理): decides whether supplementary retrieval is needed based on intermediate results, dynamically adjusting the research path;",
        "- Iterative reasoning (深度推理): decides whether supplementary retrieval is needed based on intermediate results, dynamically adjusting the research path;",
    ),
    (
        "2. Based on the clarification questions returned by Kimi, confirm or refine the research direction.",
        "2. Based on the Clarification (意图澄清) questions returned by Kimi, confirm or refine the research direction.",
    ),
    (
        "2. During clarification: actively calibrate the research direction",
        "2. During Clarification (意图澄清): actively calibrate the research direction",
    ),
    (
        "After you submit a question, Kimi will return a clarification confirmation.",
        "After you submit a question, Kimi will return a Clarification (意图澄清) confirmation.",
    ),
    (
        "- **Make good use of Clarification**: After you submit a question, Kimi will return a Clarification confirmation.",
        "- **Make good use of Clarification (意图澄清)**: After you submit a question, Kimi will return a Clarification (意图澄清) confirmation.",
    ),
    (
        "If your input during Clarification is too long, unclear, or deviates from the original question, the research direction may go off track.",
        "If your input during Clarification (意图澄清) is too long, unclear, or deviates from the original question, the research direction may go off track.",
    ),
]


def clarification_bilingual(locale: str) -> str:
    local = CLARIFICATION_LOCAL[locale]
    if locale == "ja-JP":
        return f"Clarification（{local}）"
    if locale == "fr-FR":
        return local
    return f"Clarification ({local})"


def fix_intl_prose(text: str, locale: str) -> str:
    bi = clarification_bilingual(locale)
    local = CLARIFICATION_LOCAL[locale]

    lines = []
    for line in text.splitlines(keepends=True):
        # Pipeline table step labels stay local-only (no Clarification prefix).
        if re.match(r"^\| \*\*.+\*\* \|", line):
            lines.append(line)
            continue
        lines.append(line)
    text = "".join(lines)

    text = re.sub(
        r"\bClarification\b(?!\s*[\(（])",
        bi,
        text,
    )

    if locale == "fr-FR":
        text = re.sub(
            r"(?<![\w'])clarification(?![\w'])",
            local,
            text,
            flags=re.IGNORECASE,
        )
    else:
        text = re.sub(r"\bclarification\b", bi, text, flags=re.IGNORECASE)

    if locale == "it-IT":
        text = text.replace(
            "domande di chiarimento",
            f"domande di Clarification ({local})",
        )
        text = text.replace(
            "fase di chiarimento",
            f"Clarification ({local})",
        )
        text = text.replace(
            "risposte di chiarimento",
            f"risposte di Clarification ({local})",
        )
    if locale == "id-ID":
        text = text.replace(
            "pertanyaan klarifikasi",
            f"pertanyaan Clarification ({local})",
        )
    if locale == "vi-VN":
        text = text.replace(
            "câu hỏi làm rõ",
            f"câu hỏi Clarification ({local})",
        )
        text = text.replace(
            "phần làm rõ",
            f"phần Clarification ({local})",
        )
        text = text.replace(
            "quá trình làm rõ",
            f"quá trình Clarification ({local})",
        )
        text = text.replace(
            "trả lời làm rõ",
            f"trả lời Clarification ({local})",
        )
    if locale == "tr-TR":
        text = text.replace(
            "netleştirme sorularını",
            f"Clarification ({local}) sorularını",
        )
    if locale == "ru-RU":
        text = text.replace(
            "уточняющие вопросы",
            f"вопросы Clarification ({local})",
        )

    double = f"{bi} ({local})"
    while double in text:
        text = text.replace(double, bi)

    return text


def patch_file(path: Path, locale: str | None, dry_run: bool) -> bool:
    original = path.read_text(encoding="utf-8")
    if locale == "en-CN":
        text = original
        for old, new in EN_CN_REPLACEMENTS:
            text = text.replace(old, new)
    elif locale in INTL_LOCALES:
        text = fix_intl_prose(original, locale)
    else:
        return False

    if text == original:
        return False
    if not dry_run:
        path.write_text(text, encoding="utf-8")
    return True


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    targets: list[tuple[str, Path]] = [
        ("en-CN", Path("en-CN/deep-research/overview.md")),
        ("en-CN", Path("en-CN/deep-research/wrong-direction.md")),
    ]
    for locale in INTL_LOCALES:
        targets.append((locale, Path(locale) / "deep-research" / "overview.md"))
        targets.append((locale, Path(locale) / "deep-research" / "wrong-direction.md"))

    updated = 0
    for locale, path in targets:
        if not path.is_file():
            raise SystemExit(f"Missing: {path}")
        if patch_file(path, locale, args.dry_run):
            updated += 1
            action = "would update" if args.dry_run else "updated"
            print(f"{action}: {path}")

    print(f"\n{'Would update' if args.dry_run else 'Updated'} {updated} files.")


if __name__ == "__main__":
    main()
