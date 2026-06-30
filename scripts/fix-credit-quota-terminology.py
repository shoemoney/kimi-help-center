#!/usr/bin/env python3
"""Unify membership billing terminology: quota -> credit (locale-aware).

Keeps API rate-limit / concurrency quota and kimi-code error strings unchanged.
Does not modify slug or pageUrl lines.
"""

from __future__ import annotations

import argparse
import re
from pathlib import Path

LOCALES = [
    "en-US",
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

SKIP_LINE = re.compile(
    r"(slug:\s*\"|pageUrl:\s*\"|"
    r"custom rate quota|\brate quota\b|concurrency quota|"
    r"\bhigher quota\b|"
    r"rate limit.*\bquota\b|\bquota\b.*rate limit|"
    r"429|Too Many Requests|RPM|TPM|"
    r"content:\s*.*(?:rate limit|429|Too Many Requests))",
    re.I,
)

# Word-boundary quota match (normal string — r"\b" in raw strings is backspace).
QUOTA_WORD = "\\bquota\\b"
CREDIT_WORD = "\\bcredit\\b"
CREDITS_WORD = "\\bcredits\\b"

# Longer phrases first within each locale block.
REPLACEMENTS: dict[str, list[tuple[str, str]]] = {
    "en-US": [
        (r"Agent quota & billing", "Agent credits & billing"),
        (r"Agent quota\*", "Agent credits*"),
        (r"Kimi Code quota", "Kimi Code credits"),
        (r"Quota & Billing", "Credits & Billing"),
        (r"Quota & billing", "Credits & billing"),
        (r"View Quota & Rate Limits", "View Credits & Rate Limits"),
        (r"Membership/quota system", "Membership/credit system"),
        (r"Full Current-Period Quota", "Full Current-Period Credits"),
        (r"Bonus quota", "Bonus credits"),
        (r"plan quota", "plan credits"),
        (r"membership quota", "membership credits"),
        (r"official membership quota", "official membership credits"),
        (r"account quota", "account credits"),
        (r"enterprise quota", "enterprise credits"),
        (r"personal quota", "personal credits"),
        (r"monthly free credit quota", "monthly free credits"),
        (r"insufficient quota", "insufficient credits"),
        (r"no quota consumption", "no credit consumption"),
        (r"quota consumption", "credit consumption"),
        (r"quota information", "credit information"),
        (r"quota and usage", "credits and usage"),
        (r"quota and rate limits", "credits and rate limits"),
        (r"checking your quota", "checking your credits"),
        (r"check quota", "check credit"),
        (r"check your quota", "check your credits"),
        (r"current quota", "current credits"),
        (r"actual quota display", "actual credit display"),
        (r"quota display", "credit display"),
        (r"quota balance", "credit balance"),
        (r"quota usage", "credit usage"),
        (r"Quota Usage", "Credit usage"),
        (r"Quota usage", "Credit usage"),
        (r"quota unit", "credit unit"),
        (r"quota pools", "credit pools"),
        (r"quota pool", "credit pool"),
        (r"quota system", "credit system"),
        (r"separate quotas", "separate credits"),
        (r"one quota pool", "one credit pool"),
        (r"Two quota pools", "Two credit pools"),
        (r"two quota pools", "two credit pools"),
        (r"20x quota", "20x credits"),
        (r"includes quota", "includes credits"),
        (r"quota exhausted", "credits exhausted"),
        (r"more quota", "more credits"),
        (r"full quota", "full credits"),
        (r"monthly quota", "monthly credits"),
        (r"consume quota", "consume credits"),
        (r"consumes quota", "consumes credits"),
        (r"consumed quota", "consumed credits"),
        (r"consume your quota", "consume your credits"),
        (r"does not consume quota", "does not consume credits"),
        (r"do not consume quota", "do not consume credits"),
        (r"still consume quota", "still consume credits"),
        (r"How creating Skills consumes quota", "How creating Skills consumes credits"),
        (r"How is Agent quota calculated", "How are Agent credits calculated"),
        (r"What happens when quota runs out", "What happens when credits run out"),
        (r"When your quota is exhausted", "When your credits are exhausted"),
        (r"Quota is deducted", "Credits are deducted"),
        (r"quota will be refunded", "credits will be refunded"),
        (r"Quota consumption", "Credit consumption"),
        (r"Quota resets", "Credits reset"),
        (r"Quota is", "Credits are"),
        (r"\| Benefit \| Quota \|", "| Benefit | Credits |"),
        (r"\| Quota \|", "| Credits |"),
        (r"quota deducted", "credits deducted"),
        (r"separate quotas", "separate credit allocations"),
        (QUOTA_WORD, "credits"),
    ],
    "de-DE": [
        (r"Agent quota & billing", "Agent-Credits & Abrechnung"),
        (r"Agent quota\*", "Agent-Credits*"),
        (r"Kimi Code quota", "Kimi Code Credits"),
        (r"Quota & Billing", "Credits & Abrechnung"),
        (r"Quota & Abrechnung", "Credits & Abrechnung"),
        (r"Bonus-?quota", "Bonus-Credits"),
        (r"Plan-?quota", "Plan-Credits"),
        (r"quota pools", "Credit-Pools"),
        (r"quota pool", "Credit-Pool"),
        (r"Quota-?Nutzung", "Credit-Nutzung"),
        (r"quota-Nutzung", "Credit-Nutzung"),
        (r"Quota-Verbrauch", "Credit-Verbrauch"),
        (r"quota-Verbrauch", "Credit-Verbrauch"),
        (r"Quota-Einheit", "Credit-Einheit"),
        (r"quota-Einheit", "Credit-Einheit"),
        (r"\| Quota \|", "| Credits |"),
        (QUOTA_WORD, "Credits"),
    ],
    "es-419": [
        (r"Cuota y facturación del Agent", "Créditos y facturación del Agent"),
        (r"Cuota y facturación", "Créditos y facturación"),
        (r"Quota y facturación", "Créditos y facturación"),
        (r"Agent quota\*", "Créditos de Agent*"),
        (r"Quota Agent\*", "Créditos de Agent*"),
        (r"Kimi Code quota", "Créditos de Kimi Code"),
        (r"quota pools", "pools de créditos"),
        (r"quota pool", "pool de créditos"),
        (r"pools de quota", "pools de créditos"),
        (r"pool de quota", "pool de créditos"),
        (r"consumo de quota", "consumo de créditos"),
        (r"Uso de quota", "Uso de créditos"),
        (r"\| Quota \|", "| Créditos |"),
        (QUOTA_WORD, "créditos"),
        (r"\\bcuota\\b", "créditos"),
    ],
    "fr-FR": [
        (r"Quota et facturation de l'Agent", "Crédits et facturation de l'Agent"),
        (r"Quota et facturation", "Crédits et facturation"),
        (r"Agent quota\*", "Crédits Agent*"),
        (r"Quota Agent\*", "Crédits Agent*"),
        (r"Kimi Code quota", "Crédits Kimi Code"),
        (r"quota pools", "pools de crédits"),
        (r"quota pool", "pool de crédits"),
        (r"Consommation du quota", "Consommation de crédits"),
        (r"consommation du quota", "consommation de crédits"),
        (r"\| Quota \|", "| Crédits |"),
        (QUOTA_WORD, "crédits"),
    ],
    "id-ID": [
        (r"Quota & penagihan Agent", "Kredit & penagihan Agent"),
        (r"Quota & Penagihan", "Kredit & Penagihan"),
        (r"Agent quota\*", "Kredit Agent*"),
        (r"Quota Agent\*", "Kredit Agent*"),
        (r"Kimi Code quota", "Kredit Kimi Code"),
        (r"quota pools", "pool kredit"),
        (r"quota pool", "pool kredit"),
        (r"Penggunaan Quota", "Penggunaan kredit"),
        (r"penggunaan quota", "penggunaan kredit"),
        (r"\| Quota \|", "| Kredit |"),
        (QUOTA_WORD, "kredit"),
    ],
    "it-IT": [
        (r"Quota e fatturazione di Agent", "Crediti e fatturazione di Agent"),
        (r"Quota e fatturazione", "Crediti e fatturazione"),
        (r"Agent quota\*", "Crediti Agent*"),
        (r"Quota Agent\*", "Crediti Agent*"),
        (r"Kimi Code quota", "Crediti Kimi Code"),
        (r"quota pools", "pool di crediti"),
        (r"quota pool", "pool di crediti"),
        (r"Utilizzo della quota", "Utilizzo dei crediti"),
        (r"quota usage", "utilizzo crediti"),
        (r"\| Quota \|", "| Crediti |"),
        (QUOTA_WORD, "crediti"),
    ],
    "ja-JP": [
        (r"Agent の quota と請求", "Agent のクレジットと請求"),
        (r"creditの更新と利用ルール", "クレジットの更新と利用ルール"),
        (r"credit プール", "クレジットプール"),
        (r"creditプール", "クレジットプール"),
        (r"quotaプール", "クレジットプール"),
        (r"quota プール", "クレジットプール"),
        (r"Agent quota\*", "Agent クレジット*"),
        (r"エージェント quota\*", "Agent クレジット*"),
        (r"Kimi Code quota", "Kimi Code クレジット"),
        (r"Quota & Billing", "クレジットと請求"),
        (r"quota pools", "クレジットプール"),
        (r"quota pool", "クレジットプール"),
        (r"quota consumption", "クレジット消費"),
        (QUOTA_WORD, "クレジット"),
        (CREDITS_WORD, "クレジット"),
        (CREDIT_WORD, "クレジット"),
    ],
    "ko-KR": [
        (r"Agent quota 및 과금", "Agent 크레딧 및 과금"),
        (r"Quota & Billing", "크레딧 및 과금"),
        (r"Quota & 결제", "크레딧 및 결제"),
        (r"Agent quota\*", "Agent 크레딧*"),
        (r"Kimi Code quota", "Kimi Code 크레딧"),
        (r"quota pools", "크레딧 풀"),
        (r"quota pool", "크레딧 풀"),
        (r"quota 풀", "크레딧 풀"),
        (r"Membership/quota system", "Membership/크레딧 system"),
        (r"멤버십/quota 시스템", "멤버십/크레딧 시스템"),
        (QUOTA_WORD, "크레딧"),
        (CREDITS_WORD, "크레딧"),
        (CREDIT_WORD, "크레딧"),
    ],
    "pt-BR": [
        (r"Quota e cobrança do Agent", "Créditos e cobrança do Agent"),
        (r"Quota e cobrança", "Créditos e cobrança"),
        (r"Agent quota\*", "Créditos do Agent*"),
        (r"Quota do Agent\*", "Créditos do Agent*"),
        (r"Kimi Code quota", "Créditos do Kimi Code"),
        (r"quota pools", "pools de créditos"),
        (r"quota pool", "pool de créditos"),
        (r"Uso de quota", "Uso de créditos"),
        (r"\| Quota \|", "| Créditos |"),
        (QUOTA_WORD, "créditos"),
    ],
    "ru-RU": [
        (r"Quota & billing", "Credits & billing"),
        (r"Quota & биллинг", "Credits & биллинг"),
        (r"Agent quota\*", "Кредиты Agent*"),
        (r"quota Agent\*", "Кредиты Agent*"),
        (r"Kimi Code quota", "Кредиты Kimi Code"),
        (r"quota pools", "пулы кредитов"),
        (r"quota pool", "пул кредитов"),
        (r"quota pool", "пул кредитов"),
        (r"\| Quota \|", "| Кредиты |"),
        (QUOTA_WORD, "кредиты"),
    ],
    "th-TH": [
        (r"quota และการเรียกเก็บเงินของ Agent", "เครดิตและการเรียกเก็บเงินของ Agent"),
        (r"Agent quota\*", "เครดิต Agent*"),
        (r"Kimi Code quota", "เครดิต Kimi Code"),
        (r"quota pools", "พูลเครดิต"),
        (r"quota pool", "พูลเครดิต"),
        (r"\| quota \|", "| เครดิต |"),
        (r"\| Quota \|", "| เครดิต |"),
        (QUOTA_WORD, "เครดิต"),
    ],
    "tr-TR": [
        (r"Agent quota\*", "Agent kredisi*"),
        (r"Kimi Code quota", "Kimi Code kredisi"),
        (r"quota pools", "kredi havuzları"),
        (r"quota pool", "kredi havuzu"),
        (r"quota havuzu", "kredi havuzu"),
        (r"Quota Kullanımı", "Kredi kullanımı"),
        (r"\| Quota \|", "| Kredi |"),
        (QUOTA_WORD, "kredi"),
    ],
    "vi-VN": [
        (r"Quota & thanh toán cho Agent", "Tín dụng & thanh toán cho Agent"),
        (r"Quota & Thanh toán", "Tín dụng & Thanh toán"),
        (r"Agent quota\*", "Tín dụng Agent*"),
        (r"Quota Agent\*", "Tín dụng Agent*"),
        (r"Kimi Code quota", "Tín dụng Kimi Code"),
        (r"quota pools", "pool tín dụng"),
        (r"quota pool", "pool tín dụng"),
        (r"kho quota", "kho tín dụng"),
        (r"Mức sử dụng quota", "Mức sử dụng tín dụng"),
        (r"\| Quota \|", "| Tín dụng |"),
        (QUOTA_WORD, "tín dụng"),
    ],
    "zh-SG": [
        (r"Agent quota 与计费", "Agent 额度与计费"),
        (r"Agent quota\*", "Agent 额度*"),
        (r"Kimi Code quota", "Kimi Code 额度"),
        (r"Quota & Billing", "额度与计费"),
        (r"credit 更新与使用规则", "额度更新与使用规则"),
        (r"quota 池", "额度池"),
        (r"quota池", "额度池"),
        (r"credit 池", "额度池"),
        (r"credit池", "额度池"),
        (r"两个 credit", "两个额度"),
        (r"奖励 credit", "奖励额度"),
        (r"方案 credit", "方案额度"),
        (r"credit 不足", "额度不足"),
        (r"credit 如何", "额度如何"),
        (r"credit 更新", "额度更新"),
        (r"credit 用完", "额度用完"),
        (r"消耗 credit", "消耗额度"),
        (r"不消耗 quota", "不消耗额度"),
        (r"独立 quota", "独立额度"),
        (r"# credit", "# 额度"),
        (r'title: "credit', 'title: "额度'),
        (r"\| Quota \|", "| 额度 |"),
        (QUOTA_WORD, "额度"),
        (r"(?<![-/])credit(?![-/a-zA-Z])", "额度"),
        (CREDITS_WORD, "额度"),
    ],
    "zh-TW": [
        (r"Agent quota 與計費", "Agent 額度與計費"),
        (r"Agent quota\*", "Agent 額度*"),
        (r"Kimi Code quota", "Kimi Code 額度"),
        (r"Quota & Billing", "額度與計費"),
        (r"Quota 與計費", "額度與計費"),
        (r"credit 更新與使用規則", "額度更新與使用規則"),
        (r"credit 池", "額度池"),
        (r"credit池", "額度池"),
        (r"quota 池", "額度池"),
        (r"quota池", "額度池"),
        (r"兩個 credit", "兩個額度"),
        (r"獎勵 credit", "獎勵額度"),
        (r"方案 credit", "方案額度"),
        (r"credit 不足", "額度不足"),
        (r"credit 如何", "額度如何"),
        (r"credit 更新", "額度更新"),
        (r"credit 用完", "額度用完"),
        (r"credit 究竟", "額度究竟"),
        (r"credit 會", "額度會"),
        (r"credit 的", "額度的"),
        (r"消耗 credit", "消耗額度"),
        (r"配置 quota", "配置額度"),
        (r"不消耗 quota", "不消耗額度"),
        (r"消耗 quota", "消耗額度"),
        (r"獨立 quota", "獨立額度"),
        (r"獨立的 quota", "獨立的額度"),
        (r"# credit", "# 額度"),
        (r'title: "credit', 'title: "額度'),
        (r"\| Quota \|", "| 額度 |"),
        (QUOTA_WORD, "額度"),
        (r"(?<![-/])credit(?![-/a-zA-Z])", "額度"),
        (CREDITS_WORD, "額度"),
    ],
}


def apply_replacements(text: str, locale: str) -> tuple[str, int]:
    rules = REPLACEMENTS.get(locale, [])
    changes = 0
    for pattern, repl in rules:
        new_text, n = re.subn(pattern, repl, text, flags=re.I)
        if n:
            changes += n
            text = new_text
    return text, changes


def process_file(path: Path, locale: str, dry_run: bool) -> int:
    original = path.read_text(encoding="utf-8")
    lines = original.splitlines(keepends=True)
    out_lines: list[str] = []
    file_changes = 0

    for line in lines:
        if SKIP_LINE.search(line):
            out_lines.append(line)
            continue
        new_line, n = apply_replacements(line, locale)
        file_changes += n
        out_lines.append(new_line)

    if file_changes and not dry_run:
        path.write_text("".join(out_lines), encoding="utf-8")
    return file_changes


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--locale", action="append")
    args = parser.parse_args()

    locales = args.locale or LOCALES
    total_files = 0
    total_changes = 0

    for locale in locales:
        locale_dir = Path(locale)
        if not locale_dir.is_dir():
            raise SystemExit(f"Missing locale: {locale}")
        for path in sorted(locale_dir.rglob("*.md")):
            n = process_file(path, locale, args.dry_run)
            if n:
                total_files += 1
                total_changes += n
                action = "would update" if args.dry_run else "updated"
                print(f"{action}: {path} ({n} replacements)")

    print(
        f"\n{'Would update' if args.dry_run else 'Updated'} {total_files} files, "
        f"{total_changes} replacements."
    )


if __name__ == "__main__":
    main()
