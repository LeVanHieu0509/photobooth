import { english } from "./en";
import { vietnamese } from "./vi";

export const translateLanguage = {
  vi: vietnamese,
  en: english,
};

export type LanguageType = keyof typeof translateLanguage;
export type WebType = "HAN" | "MAI";
