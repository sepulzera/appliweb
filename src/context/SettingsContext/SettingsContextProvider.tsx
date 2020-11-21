import * as React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTranslation } from 'react-i18next';

import { AnyComponent } from '../../types/Types';
import { LANGUAGE_KEY } from '../../constants/Language';

import SettingsContext from './SettingsContext';

/** {@link SettingsContextProvider} Props. */
interface ISettingsContextProviderProps {
  /** App container that should have access to the providers. */
  children: AnyComponent;
}

const THEME_KEY = 'theme';

const parseTheme = (themeSetting: string | undefined | null, prefersDarkMode: boolean): number => {
  const prefersDarkModeNumber = prefersDarkMode ? 1 : 0;
  if (themeSetting == null) return prefersDarkModeNumber;
  const themeNumber = parseInt(themeSetting);
  if (Number.isNaN(themeNumber) || themeNumber < 0 || themeNumber > 1) return prefersDarkModeNumber;
  return themeNumber;
};

const parseLanguage = (languageSetting: string | undefined | null, browserLanguage: string): string => {
  if (languageSetting == null) return browserLanguage;
  return languageSetting;
};

/**
 * {@link SettingsContext} Provider.
 *
 * @param props - {@link ISettingsContextProviderProps}.
 */
const SettingsContextProvider: React.FC<ISettingsContextProviderProps> = (props: ISettingsContextProviderProps) => {
  const { i18n } = useTranslation();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true });

  const [theme, setTheme] = React.useState<number>(parseTheme(localStorage.getItem(THEME_KEY), prefersDarkMode));
  const [language, setLanguage] = React.useState<string>(parseLanguage(localStorage.getItem(LANGUAGE_KEY), i18n.language));

  React.useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  const changeLanguage = (lang: string) => {
    localStorage.setItem(LANGUAGE_KEY, lang);
    setLanguage(lang);
  };

  const changeTheme = (newTheme: number) => {
    localStorage.setItem(THEME_KEY, String(newTheme));
    setTheme(newTheme);
  };

  return (
    <SettingsContext.Provider value={{
      theme:    theme,
      language: language,

      getTheme: () => theme,
      setTheme: changeTheme,

      getLanguage: () => language,
      setLanguage: changeLanguage,
    }}>
      {props.children}
    </SettingsContext.Provider>
   );
};

export default SettingsContextProvider;
