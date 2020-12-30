import en from './en';

interface ILocale {
  [index: string]: any;
}
const locales: ILocale = {
  en,
};

const translate = (key: string, locale = 'en'): string => {
  if (!locales[locale]) {
    throw new Error("Locale doesn't exist");
  }

  if (!locales[locale][key]) {
    throw new Error(`Translation for ${key} doesn't exist`);
  }

  return locales[locale][key];
};

export default translate;
