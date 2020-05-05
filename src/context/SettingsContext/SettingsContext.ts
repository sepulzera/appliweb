import React from 'react';

interface ISettingsContextProvider {
  theme: number | undefined;
  language: string;

  setTheme: (theme: number) => void;
  getTheme: () => number | undefined;

  getLanguage: () => string;
  setLanguage: (lang: string) => void;
}

const SettingsContext = React.createContext<ISettingsContextProvider | null>(null);

export default SettingsContext;
