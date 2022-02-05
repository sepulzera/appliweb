import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { initReactI18next } from 'react-i18next';

import { LANGUAGE_KEY } from './constants/Language';

const backendOptions = {
  loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
};

i18n
  // load translation using xhr -> see /public/locales
  // learn more: https://github.com/i18next/i18next-xhr-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: 'en',
    lng: localStorage.getItem(LANGUAGE_KEY) ?? undefined,
    ns: ['about', 'career', 'city', 'common', 'education', 'error', 'home', 'job', 'legal', 'leisure', 'privacy', 'skill', 'task'],
    defaultNS: 'common',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    nsSeparator: ':',
    supportedLngs: ['de', 'en'],
    backend: backendOptions,
  });

export default i18n;
