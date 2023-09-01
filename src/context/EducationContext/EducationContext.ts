import { createContext } from 'react';
import EducationRecord from './EducationRecord';

export interface IEducationContext {
  data: Map<number, EducationRecord>;
  getEducation: (id: number) => EducationRecord | undefined;
  getEducationsForUser: (userId: number) => Array<EducationRecord>;
}

const EducationContext = createContext<IEducationContext>({} as IEducationContext);

export default EducationContext;
