import * as React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTranslation } from 'react-i18next';

import SettingsContext from './SettingsContext';

/** {@link SettingsContextProvider} Props. */
interface ISettingsContextProviderProps {
  /** App container that should have access to the providers. */
  children: React.ReactNode;
}

/**
 * {@link SettingsContext} Provider.
 *
 * @param props - {@link ISettingsContextProviderProps}.
 */
const SettingsContextProvider: React.FC<ISettingsContextProviderProps> = (props: ISettingsContextProviderProps) => {
  const { i18n } = useTranslation();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)', { noSsr: true });

  const [theme, setTheme] = React.useState(prefersDarkMode ? 1 : 0);
  const [language, setLanguage] = React.useState(i18n.language);

  React.useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  const changeTheme = (newTheme: number) => {
    setTheme(newTheme);
  };

  return (
    <SettingsContext.Provider value={{
      theme: theme,
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
