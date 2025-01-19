// index.ts
import { en } from './en';
import { pt } from './pt';
import { es } from './es';
import { fr } from './fr';
import { it } from './it';

// Generic type that can handle any nested structure
export type TranslationValue = 
  | string 
  | { [key: string]: TranslationValue }
  | Array<{ [key: string]: TranslationValue }>;

export interface NestedTranslation {
  [key: string]: TranslationValue;
}

export interface TranslationsType {
  [language: string]: NestedTranslation;
}

export const translations: TranslationsType = { en, pt, es, fr, it };
