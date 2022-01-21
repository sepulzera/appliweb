/* eslint-disable react/jsx-indent */
import { AnyComponent } from '../types/Types';

import CareerContextProvider       from '../context/CareerContext/CareerContextProvider';
import DescriptionContextProvider  from '../context/DescriptionContext/DescriptionContextProvider';
import EducationContextProvider    from '../context/EducationContext/EducationContextProvider';
import FeatureContextProvider      from '../context/FeatureContext/FeatureContextProvider';
import JobRequestContextProvider   from '../context/JobRequestContext/JobRequestContextProvider';
import LeisureContextProvider      from '../context/LeisureContext/LeisureContextProvider';
import SettingsContextProvider     from '../context/SettingsContext/SettingsContextProvider';
import SkillContextProvider        from '../context/SkillContext/SkillContextProvider';
import SkillMappingContextProvider from '../context/SkillMappingContext/SkillMappingContextProvider';
import TaskContextProvider         from '../context/TaskContext/TaskContextProvider';
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
    <CareerContextProvider>
    <EducationContextProvider>
    <DescriptionContextProvider>
    <FeatureContextProvider>
    <JobRequestContextProvider>
    <LeisureContextProvider>
    <SkillContextProvider>
    <SkillMappingContextProvider>
    <TaskContextProvider>
    <UserContextProvider>
      {props.children}
    </UserContextProvider>
    </TaskContextProvider>
    </SkillMappingContextProvider>
    </SkillContextProvider>
    </LeisureContextProvider>
    </JobRequestContextProvider>
    </FeatureContextProvider>
    </DescriptionContextProvider>
    </EducationContextProvider>
    </CareerContextProvider>
  </SettingsContextProvider>
);

export default ContextProvider;
