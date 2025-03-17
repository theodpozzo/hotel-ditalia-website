# Language Translation System Overview

## Introduction

This document provides an overview of the language translation system implemented in the Hotel D'Italia website. The system allows for dynamic language switching and utilizes a context-based approach to manage translations across the application.

## Structure

The translation system consists of the following key components:

1. **Translation Files**: These files contain the actual translations for each supported language.
2. **Language Context**: This context manages the current language state and provides a translation function.
3. **Translation Hook**: A custom hook that allows components to access the translation function easily.
4. **Components**: Various components that utilize the translation system to display text based on the selected language.

### 1. Translation Files

Translation files are located in the `ui/translations` directory. Each file corresponds to a specific language and exports an object containing key-value pairs for translations. For example:

- **English (`en.ts`)**:
    ```typescript
    export const en = {
      header: {
        navigation: {
          home: "Home",
          gallery: "Gallery",
          location: "Location",
          about: "About Us"
        },
        contact: {
          needHelp: "Need help?",
          contactUs: "Contact us:",
          phone: "+55 51 9684-4479",
          email: "contact@hotelditalia.com"
        }
      },
      home: {
        welcome: "Welcome to Hotel D'Italia",
        description: "Your home away from home in Arroio do Sal"
      },
      // Additional sections...
    };
    ```

- **Portuguese (`pt.ts`)**:
    ```typescript
    export const pt = {
      header: {
        navigation: {
          home: "Início",
          gallery: "Galeria",
          location: "Localização",
          about: "Sobre Nós"
        },
        contact: {
          needHelp: "Precisa de ajuda?",
          contactUs: "Entre em contato conosco:",
          phone: "+55 51 9684-4479",
          email: "contato@hotelditalia.com"
        }
      },
      home: {
        welcome: "Bem-vindo ao Hotel D'Itália",
        description: "Sua casa longe de casa em Arroio do Sal"
      },
      // Additional sections...
    };
    ```

### 2. Language Context

The `LanguageContext` is defined in `ui/context/LanguageContext.tsx`. It provides the following functionalities:

- **State Management**: It maintains the current language state and allows for updates.
- **Translation Function**: It provides a function `t(key: string)` that retrieves the appropriate translation based on the current language.

#### Key Functions:
- **setLanguage**: Updates the current language and stores it in `localStorage`.
- **t**: Takes a key (e.g., `'header.navigation.home'`) and returns the corresponding translation.

### 3. Translation Hook

The `useLanguageContext` hook allows components to access the language context easily. It provides the current language, the function to set the language, and the translation function.

### 4. Components

Components such as `Footer`, `HeroSection`, and `BookingSection` utilize the `useLanguageContext` hook to access translations. For example:

```typescript
import { useLanguageContext } from '@/context/LanguageContext';

export function Footer() {
  const { t } = useLanguageContext();

  return (
    <footer>
      <h3>{t('footer.contact.title')}</h3>
      <p>{t('footer.contact.phone')}</p>
      <p>{t('footer.contact.email')}</p>
    </footer>
  );
}
```

### Usage

1. **Setting the Language**: The language can be changed by calling the `setLanguage` function from the context. This updates the language state and triggers a re-render of components that use the translation function.

2. **Retrieving Translations**: Use the `t` function to get the translated text for a specific key. The keys should match the structure defined in the translation files.

### Conclusion

This translation system provides a flexible and maintainable way to manage multiple languages in your Next.js application. By using context and hooks, it simplifies the process of accessing and updating translations throughout the application. 

For any further questions or clarifications, feel free to reach out!