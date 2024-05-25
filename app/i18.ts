// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          greeting: 'Hello'
        }
      },
      uz: {
        translation: {
          greeting: 'Salom'
        }
      },
      ru: {
        translation: {
          greeting: 'Privet'
        }
      }
    },
    lng: 'uz',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
