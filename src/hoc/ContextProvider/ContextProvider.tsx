import * as React from 'react';

import { AnyComponent } from '../../types/Types';

import UserContextProvider from '../../context/UserContext/UserContextProvider';
import JobRequestContextProvider from '../../context/JobRequestContext/JobRequestContextProvider';
import SettingsContextProvider from '../../context/SettingsContext/SettingsContextProvider';

/**
 * {@link ContextProvider} Props.
 */
interface IContextProviderProps {
  /** App container that should have access to the providers. */
  children: AnyComponent;
}

/**
 * High-level provider.
 *
 * @param props - {@link IContextProviderProps}.
 */
const ContextProvider: React.SFC<IContextProviderProps> = (props: IContextProviderProps) => (
  <SettingsContextProvider>
    <UserContextProvider>
      <JobRequestContextProvider>
        {props.children}
      </JobRequestContextProvider>
    </UserContextProvider>
  </SettingsContextProvider>
);

export default ContextProvider;
