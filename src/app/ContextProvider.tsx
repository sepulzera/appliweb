import * as React from 'react';

import { AnyComponent } from '../types/Types';

import JobRequestContextProvider from '../context/JobRequestContext/JobRequestContextProvider';
import LeisureContextProvider from '../context/LeisureContext/LeisureContextProvider';
import SettingsContextProvider from '../context/SettingsContext/SettingsContextProvider';
import SkillContextProvider from '../context/SkillContext/SkillContextProvider';
import UserContextProvider from '../context/UserContext/UserContextProvider';
import SkillMappingContextProvider from '../context/SkillMappingContext/SkillMappingContextProvider';

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
    <JobRequestContextProvider>
      <LeisureContextProvider>
        <SkillContextProvider>
          <SkillMappingContextProvider>
            <UserContextProvider>
              {props.children}
            </UserContextProvider>
          </SkillMappingContextProvider>
        </SkillContextProvider>
      </LeisureContextProvider>
    </JobRequestContextProvider>
  </SettingsContextProvider>
);

export default ContextProvider;
