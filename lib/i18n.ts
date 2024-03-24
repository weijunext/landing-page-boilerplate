import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

// export const locales = ["en", "en-US", "zh", "zh-CN", "ja", "ko", "fr", "de"];
export const locales = ["", "en", "en-US", "zh", "zh-CN"];
export const localeNames: any = {
  en: "🇺🇸 English",
  zh: "🇨🇳 中文",
  // ja: "🇯🇵 日本語",
  // ko: "🇰🇷 한국어",
  // fr: "🇫🇷 Français",
  // de: "🇩🇪 Deutsch",
};
export const defaultLocale = "en";

export function getLocale(headers: any): string {
  let languages = new Negotiator({ headers }).languages();

  return match(languages, locales, defaultLocale);
}

const dictionaries: any = {
  en: () => import("@/locales/en.json").then((module) => module.default),
  zh: () => import("@/locales/zh.json").then((module) => module.default),
  // ja: () => import("@/locales/ja.json").then((module) => module.default),
  // ko: () => import("@/locales/ko.json").then((module) => module.default),
  // fr: () => import("@/locales/fr.json").then((module) => module.default),
  // de: () => import("@/locales/de.json").then((module) => module.default),
};

export const getDictionary = async (locale: string) => {

  if (["zh-CN", "zh-TW", "zh-HK"].includes(locale)) {
    locale = "zh";
  }

  if (!Object.keys(dictionaries).includes(locale)) {
    locale = "en";
  }

  return dictionaries[locale]();
};
