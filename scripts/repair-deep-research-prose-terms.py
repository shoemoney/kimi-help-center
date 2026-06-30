#!/usr/bin/env python3
"""Repair corrupted Clarification bilingual replacements and restore pipeline table labels."""

from __future__ import annotations

import re
from pathlib import Path

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

BI = {
    locale: (
        f"Clarification（{local}）"
        if locale == "ja-JP"
        else local
        if locale == "fr-FR"
        else f"Clarification ({local})"
    )
    for locale, (local, _) in TABLE_HEADERS.items()
}


def repair_text(text: str) -> str:
    # ja doubled fullwidth parens
    text = re.sub(
        r"Clarification（([^）]+)）（\1）",
        r"Clarification（\1）",
        text,
    )

    # fr triple intention
    text = text.replace(
        "Clarification de l'intention de l'intention de l'intention",
        "Clarification de l'intention",
    )

    for locale, (local, _) in TABLE_HEADERS.items():
        bi = BI[locale]

        # Nested / duplicated bilingual fragments
        while f"{bi} ({local})" in text:
            text = text.replace(f"{bi} ({local})", bi)
        while f"Clarification (Clarification ({local})" in text:
            text = text.replace(
                f"Clarification (Clarification ({local})",
                f"Clarification ({local}",
            )

        # Table header corruption patterns
        text = text.replace(
            f"| **Clarification ({local}) {local.split()[-1]}** |",
            f"| **{local}** |",
        )
        if locale == "vi-VN":
            text = text.replace(
                f"| **Clarification ({local}) ý định** |",
                f"| **{local}** |",
            )
        if locale == "id-ID":
            text = text.replace(
                f"| **Clarification ({local}) intent** |",
                f"| **{local}** |",
            )
        if locale == "tr-TR":
            text = text.replace(
                f"| **Niyet Clarification ({local})** |",
                f"| **{local}** |",
            )
            text = text.replace(
                f"Clarification (Niyet Clarification ({local}))",
                bi,
            )

        # Generic duplicate tail after local term in parentheses
        dup = re.compile(
            re.escape(f"Clarification ({local})") + r"\s+" + re.escape(local.split()[-1]),
        )
        text = dup.sub(f"Clarification ({local})", text)

        mangled = re.compile(
            r"Clarification \("
            + re.escape(f"Clarification ({local})")
            + r"(?:\s+"
            + re.escape(local.split()[-1])
            + r")?\)",
        )
        text = mangled.sub(f"Clarification ({local})", text)

    # ru table description corruption
    text = text.replace(
        "| **Уточнение намерения** | Сам задаёт вопросы Clarification (Уточнение намерения), чтобы точнее очертить задачу |",
        "| **Уточнение намерения** | Сам задаёт уточняющие вопросы, чтобы точнее очертить задачу |",
    )

    return text


def restore_table_headers(text: str, locale: str) -> str:
    local, iterative = TABLE_HEADERS[locale]
    lines = text.splitlines()
    out = []
    in_pipeline = False
    for line in lines:
        if line.startswith("| **") and " | " in line and not line.startswith("| ---"):
            if local in line or "Clarification" in line or iterative in line:
                in_pipeline = True
        if in_pipeline and line.startswith("| **") and local.split()[0] in line:
            # first pipeline step row after header
            pass
        out.append(line)
    # Force-replace first two step rows if we know the pattern
    text = "\n".join(out)
    # Restore step 1 & 4 labels if corrupted
    text = re.sub(
        rf"\| \*\*[^|]*{re.escape(local.split()[0])}[^|]*\*\* \|",
        f"| **{local}** |",
        text,
        count=1,
    )
    return text


def main() -> None:
    paths = list(Path(".").glob("*/deep-research/*.md"))
    for path in sorted(paths):
        locale = path.parts[0]
        original = path.read_text(encoding="utf-8")
        text = repair_text(original)
        if locale in TABLE_HEADERS and path.name == "overview.md":
            local, iterative = TABLE_HEADERS[locale]
            # Ensure pipeline table uses canonical local labels only
            text = re.sub(
                rf"\| \*\*(?:Clarification \([^)]+\)[^|]*|Niyet Clarification \([^)]+\))\*\* \|",
                f"| **{local}** |",
                text,
                count=1,
            )
        if text != original:
            path.write_text(text, encoding="utf-8")
            print(f"repaired: {path}")


if __name__ == "__main__":
    main()
