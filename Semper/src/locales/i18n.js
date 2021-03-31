import i18n from 'i18next';
import { en } from './en';
import * as RNLocalize from "react-native-localize";

const languageDetector = {
  type: 'languageDetector',
  async: true, // async detection
  detect: (cb) => {
    const languageCode = RNLocalize.getLocales()
    return cb(languageCode[0].languageCode)
  },
  init: () => { },
  cacheUserLanguage: () => { }
}

i18n
  .use(languageDetector)
  .init({
    fallbackLng: 'en',
    // the translations
    resources: {
      en: en,
      // have a initial namespace
      ns: ['translation'],
      defaultNS: 'translation',
      interpolation: {
        escapeValue: false // not needed for react
      }
    }
  });

export default i18n;