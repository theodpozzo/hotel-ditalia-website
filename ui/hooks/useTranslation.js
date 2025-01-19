import { useContext } from 'react';
import { translations } from '../translations';
import { LanguageContext } from '../context/LanguageContext';

export const useTranslation = () => {
  const { language } = useContext(LanguageContext); // Get the language from context
  const fallbackLanguage = 'pt'; // Set a default language fallback

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language] || translations[fallbackLanguage]; // Use fallback if language is undefined

    for (const k of keys) {
      if (value[k] === undefined) {
        console.warn(`Translation key "${key}" not found for language "${language}"`);
        return translations[fallbackLanguage]?.[k] || key; // Fallback to default language
      }
      value = value[k];
    }

    return value;
  };

  return { t };
};
