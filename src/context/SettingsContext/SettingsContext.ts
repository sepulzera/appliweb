import { createContext } from 'react';

export interface ISettingsContext {
  theme:    number | undefined;
  language: string;

  setTheme: (theme: number) => void;
  getTheme: () => number | undefined;

  getLanguage: () => string;
  setLanguage: (lang: string) => void;
}

const SettingsContext = createContext<ISettingsContext | null>(null);

export default SettingsContext;
