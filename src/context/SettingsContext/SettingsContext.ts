import { createContext } from 'react';

export interface ISettingsContext {
  theme:    number | undefined;
  language: string;

  setTheme: (theme: number) => void;
  setLanguage: (lang: string) => void;
}

const SettingsContext = createContext<ISettingsContext>({} as ISettingsContext);

export default SettingsContext;
