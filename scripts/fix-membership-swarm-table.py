#!/usr/bin/env python3
"""Fix missing Moderato column values in membership plan tables."""

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
TARGET_FILES = [
    "membership/overview.md",
    "membership/pricing.md",
]

# Moderato values for Agent Swarm (beta), keyed by locale and optional file suffix.
BETA_VALUES: dict[str, str] = {
    "de-DE": "25 Nutzungen",
    "es-419": "25 usos",
    "fr-FR": "25 utilisations",
    "id-ID": "25 penggunaan",
    "it-IT": "25 utilizzi",
    "ja-JP": "25回",
    "ja-JP:membership/pricing.md": "25 回",
    "ko-KR": "25회",
    "pt-BR": "25 usos",
    "ru-RU": "25 использований",
    "th-TH": "ใช้ได้ 25 ครั้ง",
    "tr-TR": "25 kullanım",
    "vi-VN": "25 lượt",
    "zh-SG": "25 次",
    "zh-SG:membership/pricing.md": "25 次使用",
    "zh-TW": "25 次使用",
}

BETA_MARKERS = re.compile(
    r"(beta|bêta|Beta|ベータ|测试版|เบต้า|бета|베타)",
    re.I,
)
SUBTASK_MARKERS = re.compile(
    r"(subtask|Teilaufgabe|Subtarea|Subtugas|子任務|サブタスク|하위|"
    r"alt görev|Sous-tâche|подзадач|concorrent|concurrente|contemporanea|"
    r"eşzamanlı|tác vụ con|serentak|พร้อมกัน|并行|并发|並行|"
    r"concurrent|simult|gleichzeitige|同時|Gleichzeitige Agent-Swarm)",
    re.I,
)
MISSING_MODERATO = re.compile(r"\| — \| — \|")
SWARM_ROW = re.compile(r"Agent[\s-]Swarm", re.I)


def beta_value(locale: str, rel_path: str) -> str:
    key = f"{locale}:{rel_path}"
    return BETA_VALUES.get(key, BETA_VALUES[locale])


def fix_line(line: str, beta: str) -> tuple[str, str | None]:
    if not SWARM_ROW.search(line) or not MISSING_MODERATO.search(line):
        return line, None

    if BETA_MARKERS.search(line):
        new_line = MISSING_MODERATO.sub(f"| — | {beta} |", line, count=1)
        if new_line != line:
            return new_line, "beta"
        return line, None

    if SUBTASK_MARKERS.search(line):
        new_line = MISSING_MODERATO.sub("| — | 2 |", line, count=1)
        if new_line != line:
            return new_line, "subtasks"
        return line, None

    return line, None


def process_file(path: Path, locale: str, rel_path: str, apply: bool) -> list[str]:
    original = path.read_text(encoding="utf-8")
    lines = original.splitlines()
    changes: list[str] = []
    beta = beta_value(locale, rel_path)
    updated: list[str] = []

    for index, line in enumerate(lines, start=1):
        new_line, kind = fix_line(line, beta)
        if kind:
            changes.append(f"L{index} [{kind}] {line.strip()} -> {new_line.strip()}")
        updated.append(new_line)

    if changes and apply:
        path.write_text("\n".join(updated) + ("\n" if original.endswith("\n") else ""), encoding="utf-8")

    return changes


def main() -> None:
    parser = argparse.ArgumentParser(description="Fix Moderato Agent Swarm table values")
    parser.add_argument("--docs-root", default=".")
    parser.add_argument("--apply", action="store_true", help="Write changes to files")
    parser.add_argument("--locale", default="", help="Comma-separated locale filter")
    args = parser.parse_args()

    docs_root = Path(args.docs_root).resolve()
    locales = TARGET_LOCALES
    if args.locale.strip():
        locales = [item.strip() for item in args.locale.split(",") if item.strip()]

    mode = "APPLY" if args.apply else "DRY-RUN"
    total_files = 0
    total_changes = 0

    print(f"[{mode}] fixing membership Agent Swarm Moderato column values\n")
    for locale in locales:
        for rel_path in TARGET_FILES:
            path = docs_root / locale / rel_path
            if not path.exists():
                print(f"SKIP missing: {locale}/{rel_path}")
                continue
            changes = process_file(path, locale, rel_path, args.apply)
            if not changes:
                continue
            total_files += 1
            total_changes += len(changes)
            print(f"{locale}/{rel_path}: {len(changes)} change(s)")
            for change in changes:
                print(f"  {change}")

    print(f"\nSummary: files={total_files} changes={total_changes} mode={mode}")


if __name__ == "__main__":
    main()
