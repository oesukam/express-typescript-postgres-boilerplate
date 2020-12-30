import en from './en';

const translates: any = {
  en,
};

const locales = (key: string, locale: 'en') => {
  if (!translates[locale]) {
    throw new Error("Locale doesn't exist");
  }

  if (!translates[locale][key]) {
    throw new Error(`Translation for ${key} doesn't exist`);
  }

  return translates[locale][key];
};

export default locales;
