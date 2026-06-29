export const SOURCE_LOCALE = "en-US";
export const MAINLAND_SOURCE_LOCALE = "zh-CN";
export const MAINLAND_ENGLISH_LOCALE = "en-CN";
export const TRANSLATION_SOURCE_LOCALE_CODES = [
  SOURCE_LOCALE,
  MAINLAND_SOURCE_LOCALE,
];

export const SEO_LOCALES = [
  {
    code: "en-US",
    name: "English",
    nativeName: "English",
    routePrefix: "",
  },
  {
    code: "zh-CN",
    name: "Simplified Chinese",
    nativeName: "简体中文",
    routePrefix: "zh-cn",
  },
  {
    code: "en-CN",
    name: "English for mainland China",
    nativeName: "English (China)",
    routePrefix: "en-cn",
  },
  {
    code: "zh-SG",
    name: "Simplified Chinese for overseas markets",
    nativeName: "简体中文（海外）",
    routePrefix: "zh-sg",
  },
  {
    code: "zh-TW",
    name: "Traditional Chinese",
    nativeName: "繁體中文",
    routePrefix: "zh-tw",
  },
  {
    code: "ja-JP",
    name: "Japanese",
    nativeName: "日本語",
    routePrefix: "ja-jp",
  },
  {
    code: "ko-KR",
    name: "Korean",
    nativeName: "한국어",
    routePrefix: "ko-kr",
  },
  {
    code: "fr-FR",
    name: "French",
    nativeName: "Français",
    routePrefix: "fr-fr",
  },
  {
    code: "de-DE",
    name: "German",
    nativeName: "Deutsch",
    routePrefix: "de-de",
  },
  {
    code: "it-IT",
    name: "Italian",
    nativeName: "Italiano",
    routePrefix: "it-it",
  },
  {
    code: "es-419",
    name: "Latin American Spanish",
    nativeName: "Español latinoamericano",
    routePrefix: "es-419",
  },
  {
    code: "pt-BR",
    name: "Brazilian Portuguese",
    nativeName: "Português do Brasil",
    routePrefix: "pt-br",
  },
  {
    code: "ru-RU",
    name: "Russian",
    nativeName: "Русский",
    routePrefix: "ru-ru",
  },
  {
    code: "tr-TR",
    name: "Turkish",
    nativeName: "Türkçe",
    routePrefix: "tr-tr",
  },
  {
    code: "id-ID",
    name: "Indonesian",
    nativeName: "Bahasa Indonesia",
    routePrefix: "id-id",
  },
  {
    code: "vi-VN",
    name: "Vietnamese",
    nativeName: "Tiếng Việt",
    routePrefix: "vi-vn",
  },
  {
    code: "th-TH",
    name: "Thai",
    nativeName: "ไทย",
    routePrefix: "th-th",
  },
];

export const SEO_LOCALE_CODES = SEO_LOCALES.map((locale) => locale.code);
export const HUMAN_MAINTAINED_LOCALE_CODES = ["zh-CN"];

const humanMaintainedLocaleCodeSet = new Set(HUMAN_MAINTAINED_LOCALE_CODES);
const translationSourceLocaleCodeSet = new Set(TRANSLATION_SOURCE_LOCALE_CODES);

const localeByLowerCode = new Map(
  SEO_LOCALES.flatMap((locale) => {
    const aliases = [
      locale.code,
      locale.code.toLowerCase(),
      locale.routePrefix,
    ].filter(Boolean);
    if (locale.code === SOURCE_LOCALE) {
      aliases.push("en");
    }
    return aliases.map((alias) => [alias.toLowerCase(), locale]);
  }),
);

export function normalizeSeoLocale(input) {
  const key = String(input || "").trim().replace(/_/g, "-").toLowerCase();
  const locale = localeByLowerCode.get(key);
  if (!locale) {
    throw new Error(`unsupported SEO locale: ${input}`);
  }
  return locale.code;
}

export function seoLocaleInfo(code) {
  const normalized = normalizeSeoLocale(code);
  return SEO_LOCALES.find((locale) => locale.code === normalized);
}

export function targetSeoLocaleCodes() {
  return SEO_LOCALE_CODES.filter((code) => code !== SOURCE_LOCALE);
}

export function machineTranslationTargetLocaleCodes() {
  return SEO_LOCALE_CODES.filter(
    (code) => code !== SOURCE_LOCALE && !humanMaintainedLocaleCodeSet.has(code),
  );
}

export function isHumanMaintainedLocale(code) {
  return humanMaintainedLocaleCodeSet.has(normalizeSeoLocale(code));
}

export function normalizeTranslationSourceLocale(input) {
  const locale = normalizeSeoLocale(input);
  if (!translationSourceLocaleCodeSet.has(locale)) {
    throw new Error(
      `unsupported translation source locale: ${input}; expected ${TRANSLATION_SOURCE_LOCALE_CODES.join(" or ")}`,
    );
  }
  return locale;
}

export function defaultSourceLocaleForTarget(targetLocale) {
  const normalizedTargetLocale = normalizeSeoLocale(targetLocale);
  return normalizedTargetLocale === MAINLAND_ENGLISH_LOCALE
    ? MAINLAND_SOURCE_LOCALE
    : SOURCE_LOCALE;
}

export function groupTargetLocalesBySource(targetLocales, sourceLocaleOverride = null) {
  const forcedSourceLocale = sourceLocaleOverride
    ? normalizeTranslationSourceLocale(sourceLocaleOverride)
    : null;
  const groups = [];

  for (const targetLocale of targetLocales.map(normalizeSeoLocale)) {
    const sourceLocale = forcedSourceLocale || defaultSourceLocaleForTarget(targetLocale);
    let group = groups.find((candidate) => candidate.sourceLocale === sourceLocale);
    if (!group) {
      group = { sourceLocale, targetLocales: [] };
      groups.push(group);
    }
    group.targetLocales.push(targetLocale);
  }

  return groups;
}
