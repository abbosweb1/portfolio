import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from "./locales/eng/translation.json";
import ru from "./locales/ru/translation.json";
import uz from "./locales/uz/translation.json"; // ✅ to‘g‘ri nom

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      uz: { translation: uz },
    },
    supportedLngs: ['en', 'ru', 'uz'],
    fallbackLng: 'en',
    detection: {
      order: ['queryString', 'cookie'],
      caches: ['cookie'],
    },
    react: { useSuspense: false },
  });

export default i18n;
