#!/usr/bin/env python3
"""Replace unlocalized 'Kimi Help Center' in SeoMeta title attributes."""

from __future__ import annotations

import argparse
import re
from pathlib import Path

LOCALE_SUFFIX = {
    "de-DE": "Kimi Hilfecenter",
    "es-419": "Centro de ayuda de Kimi",
    "fr-FR": "Centre d'aide Kimi",
    "id-ID": "Pusat Bantuan Kimi",
    "it-IT": "Centro assistenza Kimi",
    "ja-JP": "Kimi ヘルプセンター",
    "ko-KR": "Kimi 도움말 센터",
    "pt-BR": "Central de Ajuda Kimi",
    "th-TH": "ศูนย์ช่วยเหลือ Kimi",
    "tr-TR": "Kimi Yardım Merkezi",
    "vi-VN": "Trung tâm trợ giúp Kimi",
    "zh-TW": "Kimi 說明中心",
}

SEOMETA_BLOCK = re.compile(r"(<SeoMeta\b[\s\S]*?/>)", re.MULTILINE)
TITLE_ATTR = re.compile(r'(title=")([^"]*)(")')


def localize_seometa_block(block: str, localized_suffix: str) -> tuple[str, bool]:
    changed = False

    def replace_title(match: re.Match[str]) -> str:
        nonlocal changed
        prefix, value, suffix = match.groups()
        if "Kimi Help Center" not in value:
            return match.group(0)
        new_value = value.replace("Kimi Help Center", localized_suffix)
        if new_value != value:
            changed = True
        return f"{prefix}{new_value}{suffix}"

    new_block = TITLE_ATTR.sub(replace_title, block, count=1)
    return new_block, changed


def process_file(path: Path, localized_suffix: str, dry_run: bool) -> bool:
    text = path.read_text(encoding="utf-8")
    if "Kimi Help Center" not in text or "<SeoMeta" not in text:
        return False

    changed_any = False
    new_parts: list[str] = []
    last_end = 0

    for match in SEOMETA_BLOCK.finditer(text):
        new_parts.append(text[last_end : match.start()])
        new_block, changed = localize_seometa_block(match.group(1), localized_suffix)
        changed_any = changed_any or changed
        new_parts.append(new_block)
        last_end = match.end()

    new_parts.append(text[last_end:])
    new_text = "".join(new_parts)

    if not changed_any or new_text == text:
        return False

    if not dry_run:
        path.write_text(new_text, encoding="utf-8")
    return True


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--locale", action="append")
    args = parser.parse_args()

    locales = args.locale or sorted(LOCALE_SUFFIX)
    total = 0

    for locale in locales:
        suffix = LOCALE_SUFFIX.get(locale)
        if not suffix:
            raise SystemExit(f"Unknown locale: {locale}")

        locale_dir = Path(locale)
        if not locale_dir.is_dir():
            raise SystemExit(f"Missing locale directory: {locale}")

        for path in sorted(locale_dir.rglob("*.md")):
            if process_file(path, suffix, args.dry_run):
                total += 1
                action = "would update" if args.dry_run else "updated"
                print(f"{action}: {path}")

    print(f"\n{'Would update' if args.dry_run else 'Updated'} {total} files.")


if __name__ == "__main__":
    main()
