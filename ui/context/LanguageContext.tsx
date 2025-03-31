'use client';
import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { translations, TranslationValue } from '@/translations/index';

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string) => string | TranslationValue;
  tObject: <T>(key: string) => T;
  tArray: (key: string) => string[];
}

// Create context with a default value matching the interface
const LanguageContext = createContext<LanguageContextType>({
  language: 'pt',
  setLanguage: () => { },
  t: (key: string) => key,
  tObject: <T,>(key: string): T => ({} as T),
  tArray: (key: string) => [],
});

export const useLanguageContext = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState('pt');

  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2)
    if (['en', 'pt', 'es', 'fr', 'it'].includes(browserLang) && language === 'pt') {
      setLanguage(browserLang)
    }
  }, [])


  // Function to get a nested value from the translation object
  const getNestedValue = (obj: any, path: string[]): any => {
    return path.reduce((current, key) =>
      current && typeof current === 'object' ? current[key] : undefined,
      obj
    );
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    const value = getNestedValue(translations[language], keys);
    return typeof value === 'string' ? value : key;
  };

  // Function to handle complex objects (useful for retrieving nested structures)
  const tObject = <T,>(key: string): T => {
    const keys = key.split('.');
    const value = getNestedValue(translations[language], keys);
    return value as T; // Return the object (could be a nested structure)
  };

  // Function to handle array-based translations
  const tArray = (key: string): string[] => {
    const keys = key.split('.');
    const value = getNestedValue(translations[language], keys);

    if (Array.isArray(value)) {
      return value.map((item) => (typeof item === 'object' ? item : `${item}`)); // Ensure array of strings or objects
    }

    return []; // Return an empty array if no valid array found
  };

  // Context value to be provided
  const value = {
    language,
    setLanguage,
    t,
    tObject,
    tArray,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}
