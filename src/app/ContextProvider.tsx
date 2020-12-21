/* eslint-disable react/jsx-indent */
import * as React from 'react';

import { AnyComponent } from '../types/Types';

import DescriptionContextProvider  from '../context/DescriptionContext/DescriptionContextProvider';
import EducationContextProvider    from '../context/EducationContext/EducationContextProvider';
import FeatureContextProvider      from '../context/FeatureContext/FeatureContextProvider';
import JobRequestContextProvider   from '../context/JobRequestContext/JobRequestContextProvider';
import LeisureContextProvider      from '../context/LeisureContext/LeisureContextProvider';
import SettingsContextProvider     from '../context/SettingsContext/SettingsContextProvider';
import SkillContextProvider        from '../context/SkillContext/SkillContextProvider';
import SkillMappingContextProvider from '../context/SkillMappingContext/SkillMappingContextProvider';
import UserContextProvider         from '../context/UserContext/UserContextProvider';

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
const ContextProvider: React.FC<IContextProviderProps> = (props: IContextProviderProps) => (
  <SettingsContextProvider>
    <EducationContextProvider>
    <DescriptionContextProvider>
    <FeatureContextProvider>
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
    </FeatureContextProvider>
    </DescriptionContextProvider>
    </EducationContextProvider>
  </SettingsContextProvider>
);

export default ContextProvider;
