#!/usr/bin/env python3
"""Insert missing Moderato tier in agent/swarm.md Beta Access callout lines."""

from __future__ import annotations

import argparse
import re
from pathlib import Path

TARGET_LOCALES = [
    "de-DE",
    "es-419",
    "fr-FR",
    "id-ID",
    "it-IT",
    "ja-JP",
    "ko-KR",
    "pt-BR",
    "ru-RU",
    "th-TH",
    "tr-TR",
    "vi-VN",
    "zh-SG",
    "zh-TW",
]
TARGET_FILE = "agent/swarm.md"

# Insert Moderato immediately before Allegretto, preserving locale punctuation style.
INSERT_PATTERNS: list[tuple[str, str]] = [
    (r"Allegretto、", "Moderato、Allegretto、"),
    (r"Allegretto, Allegro, dan Vivace", "Moderato, Allegretto, Allegro, dan Vivace"),
    (r"Allegretto, Allegro und Vivace", "Moderato, Allegretto, Allegro und Vivace"),
    (r"Allegretto, Allegro et Vivace", "Moderato, Allegretto, Allegro et Vivace"),
    (r"Allegretto, Allegro e Vivace", "Moderato, Allegretto, Allegro e Vivace"),
    (r"Allegretto, Allegro y Vivace", "Moderato, Allegretto, Allegro y Vivace"),
    (r"Allegretto, Allegro, Vivace", "Moderato, Allegretto, Allegro, Vivace"),
    (r"Allegretto, Allegro và Vivace", "Moderato, Allegretto, Allegro và Vivace"),
    (r"Allegretto, Allegro и Vivace", "Moderato, Allegretto, Allegro и Vivace"),
    (r"Allegretto, Allegro ve Vivace", "Moderato, Allegretto, Allegro ve Vivace"),
    (r"Allegretto, Allegro และ Vivace", "Moderato, Allegretto, Allegro และ Vivace"),
    (r"Tarife Allegretto, Allegro und Vivace", "Tarife Moderato, Allegretto, Allegro und Vivace"),
    (r"Allegretto、Allegro 和 Vivace", "Moderato、Allegretto、Allegro 和 Vivace"),
    (r"Allegretto、Allegro 與 Vivace", "Moderato、Allegretto、Allegro 與 Vivace"),
]

BETA_ACCESS_LINE = re.compile(
    r"(Beta|bêta|Bêta|ベータ|测试|베타|бета|Beta 版|เวอร์ชัน Beta)",
    re.I,
)


def fix_content(text: str) -> tuple[str, list[str]]:
    lines = text.splitlines()
    changes: list[str] = []
    updated: list[str] = []

    for index, line in enumerate(lines, start=1):
        new_line = line
        if (
            "Allegretto" in line
            and "Moderato" not in line
            and BETA_ACCESS_LINE.search(line)
        ):
            for pattern, replacement in INSERT_PATTERNS:
                if pattern in line:
                    new_line = line.replace(pattern, replacement, 1)
                    break
            if new_line != line:
                changes.append(f"L{index}: {line.strip()} -> {new_line.strip()}")
        updated.append(new_line)

    return "\n".join(updated) + ("\n" if text.endswith("\n") else ""), changes


def main() -> None:
    parser = argparse.ArgumentParser(description="Fix missing Moderato in agent/swarm.md")
    parser.add_argument("--docs-root", default=".")
    parser.add_argument("--apply", action="store_true")
    parser.add_argument("--locale", default="", help="Comma-separated locale filter")
    args = parser.parse_args()

    docs_root = Path(args.docs_root).resolve()
    locales = TARGET_LOCALES
    if args.locale.strip():
        locales = [item.strip() for item in args.locale.split(",") if item.strip()]

    mode = "APPLY" if args.apply else "DRY-RUN"
    total_files = 0
    total_changes = 0
    failures: list[str] = []

    print(f"[{mode}] fixing agent/swarm.md Beta Access Moderato omission\n")
    for locale in locales:
        path = docs_root / locale / TARGET_FILE
        if not path.exists():
            failures.append(f"missing file: {locale}/{TARGET_FILE}")
            continue
        original = path.read_text(encoding="utf-8")
        updated, changes = fix_content(original)
        if not changes:
            if "Allegretto" in original and "Moderato" not in original:
                failures.append(f"no matching pattern: {locale}/{TARGET_FILE}")
            continue
        total_files += 1
        total_changes += len(changes)
        print(f"{locale}/{TARGET_FILE}: {len(changes)} change(s)")
        for change in changes:
            print(f"  {change}")
        if args.apply:
            path.write_text(updated, encoding="utf-8")

    print(f"\nSummary: files={total_files} changes={total_changes} mode={mode}")
    if failures:
        print("Issues:")
        for item in failures:
            print(f"  - {item}")


if __name__ == "__main__":
    main()
