import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ne from "./locales/ne.json";

i18n
  .use(initReactI18next)  // Integrates with React
  .use(LanguageDetector)   // Detects browser language
  .init({
    resources: {
      en: { translation: en },
      ne: { translation: ne },
    },
    fallbackLng: "en", // Default language
    interpolation: {
      escapeValue: false, // Allows HTML in translations
    },
  });

export default i18n;
