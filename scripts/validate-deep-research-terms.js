#!/usr/bin/env node
/**
 * Validate Deep Research terminology across overview.md and wrong-direction.md.
 *
 * Pipeline table / bullets:
 * - en-US: Clarification / Iterative reasoning (English)
 * - en-CN: Clarification (意图澄清) / Iterative reasoning (深度推理)
 * - zh-CN: bullet list with 意图澄清 / 深度推理 / 深入思考
 * - zh-SG / zh-TW: localized Chinese table labels
 * - intl: localized step labels in table (no raw English)
 *
 * Prose (steps / tips / wrong-direction):
 * - en-CN: bilingual Clarification / Iterative reasoning labels
 * - zh-*: 意图澄清 / 深度推理; forbid deprecated 迭代推理 and table | **澄清** |
 * - intl: Clarification (local) or fr Clarification de l'intention; ja Clarification（local）
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const EN_US_TABLE_REQUIRED = [
  "| **Clarification** |",
  "| **Iterative reasoning** |",
];

const ZH_TABLE_REQUIRED = [
  "| **意图澄清** |",
  "| **深度推理** |",
  "| **深入思考** |",
];

const ZH_TW_TABLE_REQUIRED = ZH_TABLE_REQUIRED.map((line) =>
  line.replace(/意图澄清/g, "意圖澄清"),
);

const ZH_CN_PIPELINE_REQUIRED = ["- 意图澄清：", "- 深度推理：", "- 深入思考："];

const ZH_CN_PIPELINE_FORBIDDEN = [
  "- 澄清问题（Clarification）",
  "- 迭代推理：",
  "| **Clarification** |",
  "| **Iterative reasoning** |",
];

const EN_CN_REQUIRED = {
  "deep-research/overview.md": [
    "Clarification (意图澄清)",
    "Iterative reasoning (深度推理)",
  ],
  "deep-research/wrong-direction.md": ["Clarification (意图澄清)"],
};

const EN_CN_BARE_CLARIFICATION = /\bClarification\b(?!\s*\(意图澄清\))/g;
const EN_CN_BARE_ITERATIVE = /\bIterative reasoning\b(?!\s*\(深度推理\))/g;

const ZH_DEPRECATED = ["迭代推理", "| **澄清** |", "| **迭代推理** |"];

const INTL_LOCALES = [
  "de-DE",
  "es-419",
  "fr-FR",
  "it-IT",
  "id-ID",
  "vi-VN",
  "pt-BR",
  "ko-KR",
  "tr-TR",
  "th-TH",
  "ru-RU",
  "ja-JP",
];

const INTL_TABLE_FORBIDDEN = EN_US_TABLE_REQUIRED;

/** Valid intl Clarification: Clarification (…), Clarification（…）, or Clarification de l'intention */
const INTL_BARE_CLARIFICATION =
  /\bClarification\b(?!\s*[\(（]|\s+de\s+l['']intention)/g;

const CORRUPTION_CHECKS = [
  {
    pattern: /Clarification \(Clarification/,
    message: "nested Clarification bilingual label",
  },
  {
    pattern: /Clarification（[^）]+）（[^）]+）/,
    message: "duplicated ja Clarification parentheses",
  },
  {
    pattern: /de l'intention de l'intention/,
    message: "duplicated fr Clarification de l'intention",
  },
  {
    pattern: /Klarifikasi intent intent/,
    message: "duplicated id intent label",
  },
  {
    pattern: /Làm rõ ý định ý định/,
    message: "duplicated vi intent label",
  },
  {
    pattern: /Niyet Clarification/,
    message: "corrupted tr Clarification label",
  },
];

const DEEP_RESEARCH_ARTICLES = ["overview.md", "wrong-direction.md"];

export async function validateDeepResearchTerms(docsRoot = ".") {
  const root = path.resolve(docsRoot);
  const errors = [];

  await validateEnUs(root, errors);
  await validateEnCn(root, errors);
  await validateZhCn(root, errors);
  await validateZhTableLocale(root, "zh-SG", ZH_TABLE_REQUIRED, "意图澄清", errors);
  await validateZhTableLocale(root, "zh-TW", ZH_TW_TABLE_REQUIRED, "意圖澄清", errors);
  await validateIntlLocales(root, errors);
  await validateCorruption(root, errors);

  return { ok: errors.length === 0, errors };
}

async function validateEnUs(root, errors) {
  const rel = "en-US/deep-research/overview.md";
  const text = await readFile(root, rel);
  for (const needle of EN_US_TABLE_REQUIRED) {
    if (!text.includes(needle)) {
      errors.push(`${rel}: missing expected ${needle.trim()}`);
    }
  }
}

async function validateEnCn(root, errors) {
  for (const [relSuffix, required] of Object.entries(EN_CN_REQUIRED)) {
    const rel = `en-CN/${relSuffix}`;
    const text = await readFile(root, rel);
    for (const needle of required) {
      if (!text.includes(needle)) {
        errors.push(`${rel}: missing required ${needle}`);
      }
    }
    for (const match of text.matchAll(EN_CN_BARE_CLARIFICATION)) {
      errors.push(
        `${rel}: bare "Clarification" at offset ${match.index} — use Clarification (意图澄清)`,
      );
    }
    if (relSuffix.endsWith("overview.md")) {
      for (const match of text.matchAll(EN_CN_BARE_ITERATIVE)) {
        errors.push(
          `${rel}: bare "Iterative reasoning" at offset ${match.index} — use Iterative reasoning (深度推理)`,
        );
      }
    }
  }
}

async function validateZhCn(root, errors) {
  const overviewRel = "zh-CN/deep-research/overview.md";
  const overviewText = await readFile(root, overviewRel);
  for (const needle of ZH_CN_PIPELINE_REQUIRED) {
    if (!overviewText.includes(needle)) {
      errors.push(`${overviewRel}: missing required ${needle.trim()}`);
    }
  }
  for (const forbidden of ZH_CN_PIPELINE_FORBIDDEN) {
    if (overviewText.includes(forbidden)) {
      errors.push(
        `${overviewRel}: deprecated pipeline label ${forbidden.trim()} should be updated`,
      );
    }
  }

  await validateZhProseLocale(root, "zh-CN", "意图澄清", errors);
}

async function validateZhTableLocale(root, locale, tableRequired, clarifyTerm, errors) {
  const rel = `${locale}/deep-research/overview.md`;
  const text = await readFile(root, rel);
  for (const needle of tableRequired) {
    if (!text.includes(needle)) {
      errors.push(`${rel}: missing required ${needle.trim()}`);
    }
  }
  for (const forbidden of INTL_TABLE_FORBIDDEN) {
    if (text.includes(forbidden)) {
      errors.push(`${rel}: raw English step label ${forbidden.trim()} should be localized`);
    }
  }
  await validateZhProseLocale(root, locale, clarifyTerm, errors);
}

async function validateZhProseLocale(root, locale, clarifyTerm, errors) {
  for (const article of DEEP_RESEARCH_ARTICLES) {
    const rel = `${locale}/deep-research/${article}`;
    const text = await readFile(root, rel);
    if (!text.includes(clarifyTerm)) {
      errors.push(`${rel}: missing required term ${clarifyTerm}`);
    }
    for (const forbidden of ZH_DEPRECATED) {
      if (text.includes(forbidden)) {
        errors.push(`${rel}: deprecated term ${forbidden.trim()} should be updated`);
      }
    }
  }
}

async function validateIntlLocales(root, errors) {
  for (const locale of INTL_LOCALES) {
    for (const article of DEEP_RESEARCH_ARTICLES) {
      const rel = `${locale}/deep-research/${article}`;
      const text = await readFile(root, rel);

      if (article === "overview.md") {
        for (const forbidden of INTL_TABLE_FORBIDDEN) {
          if (text.includes(forbidden)) {
            errors.push(
              `${rel}: raw English step label ${forbidden.trim()} should be localized`,
            );
          }
        }
        if (text.includes("| **Clarification (")) {
          errors.push(
            `${rel}: pipeline table should use localized label, not Clarification (...`,
          );
        }
      }

      if (!text.includes("Clarification")) {
        errors.push(`${rel}: missing Clarification label in prose`);
        continue;
      }

      const proseLines = text.split("\n").filter((line) => !/^\| \*\*/.test(line));
      const prose = proseLines.join("\n");
      for (const match of prose.matchAll(INTL_BARE_CLARIFICATION)) {
        errors.push(
          `${rel}: bare "Clarification" in prose — use Clarification (local) or Clarification de l'intention`,
        );
        break;
      }
    }
  }
}

async function validateCorruption(root, errors) {
  const locales = [
    "en-CN",
    "zh-CN",
    "zh-SG",
    "zh-TW",
    ...INTL_LOCALES,
  ];
  for (const locale of locales) {
    for (const article of DEEP_RESEARCH_ARTICLES) {
      const rel = `${locale}/deep-research/${article}`;
      let text;
      try {
        text = await readFile(root, rel);
      } catch {
        continue;
      }
      for (const { pattern, message } of CORRUPTION_CHECKS) {
        if (pattern.test(text)) {
          errors.push(`${rel}: ${message}`);
        }
      }
    }
  }
}

async function readFile(root, rel) {
  return fs.readFile(path.join(root, rel), "utf8");
}

async function main() {
  const docsRoot = process.argv[2] || ".";
  const result = await validateDeepResearchTerms(docsRoot);
  if (result.ok) {
    console.log("Deep Research terminology check passed.");
    return;
  }
  console.error("Deep Research terminology check failed:\n");
  for (const err of result.errors) {
    console.error(`- ${err}`);
  }
  process.exit(1);
}

const currentFile = fileURLToPath(import.meta.url);
if (process.argv[1] && path.resolve(process.argv[1]) === currentFile) {
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}
