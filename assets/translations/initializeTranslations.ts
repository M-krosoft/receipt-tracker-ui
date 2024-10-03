import { setLocale, setTranslations } from "react-i18nify";
import { polishTranslations } from "./pl";
import { englishTranslations } from "./en";
import { Languages } from "@/app/utils/enums/languages.enum";
import { Platform } from "react-native";
import { getLocales } from "expo-localization";

export const initializeTranslations = (): void => {
  const translations = {
    en: englishTranslations,
    pl: polishTranslations,
  };

  setTranslations(translations);
  setLocale(getPreferredLanguage(Object.keys(translations) as Languages[]));
};

const getPreferredLanguage = (availableLanguages: Languages[]): Languages => {
  const browserLanguage =
    Platform.OS === "android"
      ? (getLocales()[0]?.languageCode as Languages)
      : // TODO add support for different platforms in the future
        Languages.EN;

  if (availableLanguages.includes(browserLanguage)) {
    return browserLanguage;
  }
  return Languages.EN;
};
