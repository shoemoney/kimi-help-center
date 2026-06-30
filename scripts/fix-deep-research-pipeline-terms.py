#!/usr/bin/env python3
"""Localize Deep Research pipeline table step names (Clarification / Iterative reasoning)."""

from __future__ import annotations

import argparse
from pathlib import Path

# Clarification → intent clarification; Iterative reasoning → deep iterative reasoning.
# Deep reasoning row is unchanged (distinct step in en-US).
TABLE_HEADERS: dict[str, tuple[str, str]] = {
    "de-DE": ("Absichtsklärung", "Iteratives Tiefenreasoning"),
    "es-419": ("Aclaración de intención", "Razonamiento iterativo en profundidad"),
    "fr-FR": ("Clarification de l'intention", "Raisonnement itératif approfondi"),
    "it-IT": ("Chiarimento dell'intento", "Ragionamento iterativo approfondito"),
    "id-ID": ("Klarifikasi intent", "Penalaran iteratif mendalam"),
    "vi-VN": ("Làm rõ ý định", "Suy luận sâu lặp lại"),
    "pt-BR": ("Esclarecimento de intenção", "Raciocínio iterativo aprofundado"),
    "ko-KR": ("의도 명확화", "반복 심층 추론"),
    "tr-TR": ("Niyet netleştirme", "Yinelemeli derin akıl yürütme"),
    "th-TH": ("การชี้แจงเจตนา", "การให้เหตุผลเชิงลึกเชิงวนซ้ำ"),
    "ru-RU": ("Уточнение намерения", "Итеративное глубокое рассуждение"),
    "ja-JP": ("意図の明確化", "深度推論"),
}

CLARIFICATION_OLD = (
    "| **Clarification** |",
    "| **Clarification（確認質問）** |",
)
ITERATIVE_OLD = (
    "| **Iterative reasoning** |",
    "| **Iterative reasoning（反復推論）** |",
)


def patch_overview(path: Path, clarification: str, iterative: str, dry_run: bool) -> int:
    text = path.read_text(encoding="utf-8")
    original = text
    for old in CLARIFICATION_OLD:
        if old in text:
            text = text.replace(old, f"| **{clarification}** |", 1)
            break
    for old in ITERATIVE_OLD:
        if old in text:
            text = text.replace(old, f"| **{iterative}** |", 1)
            break
    if text == original:
        return 0
    if not dry_run:
        path.write_text(text, encoding="utf-8")
    return 1


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--locale", action="append")
    args = parser.parse_args()

    locales = args.locale or list(TABLE_HEADERS.keys())
    updated = 0
    for locale in locales:
        headers = TABLE_HEADERS.get(locale)
        if not headers:
            raise SystemExit(f"No table headers configured for locale: {locale}")
        path = Path(locale) / "deep-research" / "overview.md"
        if not path.is_file():
            raise SystemExit(f"Missing file: {path}")
        n = patch_overview(path, headers[0], headers[1], args.dry_run)
        if n:
            updated += 1
            action = "would update" if args.dry_run else "updated"
            print(f"{action}: {path}")

    print(f"\n{'Would update' if args.dry_run else 'Updated'} {updated} overview files.")


if __name__ == "__main__":
    main()
