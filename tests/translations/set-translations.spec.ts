import { initializeTranslations } from "@/assets/translations/initializeTranslations";
import { Platform } from "react-native";
import { setLocale, setTranslations } from "react-i18nify";
import { getLocales, Locale } from "expo-localization";
import { when } from "jest-when";

jest.mock("react-i18nify");
jest.mock("expo-localization");
jest.mock("expo-localization");

describe("setTranslations", () => {
  test("should set preferred language to default language if not android platform", () => {
    // Given
    Platform.OS = "ios";

    // When
    initializeTranslations();

    // Then
    expect(setTranslations).toHaveBeenCalled();
    expect(setLocale).toHaveBeenCalledWith("en");
  });

  test("should set preferred language to default if language is NOT supported", () => {
    // Given
    Platform.OS = "android";
    when(getLocales).mockReturnValue([
      {
        languageCode: "migowy",
      } as Locale,
    ]);

    // When
    initializeTranslations();

    // Then
    expect(setTranslations).toHaveBeenCalled();
    expect(setLocale).toHaveBeenCalledWith("en");
  });

  test("should NOT initialize translations and set preferred language to default if language does not exist", () => {
    // Given
    Platform.OS = "android";
    when(getLocales).mockReturnValue([]);

    // When
    initializeTranslations();

    // Then
    expect(setTranslations).toHaveBeenCalled();
    expect(setLocale).toHaveBeenCalledWith("en");
  });

  test("should set preferred language if android platform and language is supported", () => {
    // Given
    Platform.OS = "android";
    when(getLocales).mockReturnValue([{ languageCode: "pl" } as Locale]);

    // When
    initializeTranslations();

    // Then
    expect(setTranslations).toHaveBeenCalled();
    expect(setLocale).toHaveBeenCalledWith("pl");
  });
});
