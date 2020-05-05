import * as React from 'react';
import UserContextProvider from '../../context/UserContext/UserContextProvider';
import SettingsContextProvider from '../../context/SettingsContext/SettingsContextProvider';

/**
 * {@link ContextProvider} Props.
 */
interface IContextProviderProps {
  /** App container that should have access to the providers. */
  children: React.ReactNode;
}

/**
 * High-level provider.
 *
 * @param props - {@link IContextProviderProps}.
 */
const ContextProvider: React.SFC<IContextProviderProps> = (props: IContextProviderProps) => (
  <SettingsContextProvider>
    <UserContextProvider>
      {props.children}
    </UserContextProvider>
  </SettingsContextProvider>
);

export default ContextProvider;
