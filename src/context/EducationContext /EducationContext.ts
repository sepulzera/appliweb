import React from 'react';
import EducationRecord from './EducationRecord';

interface IEducationContextProvider {
  data: Map<number, EducationRecord>;
  getEducation: (id: number) => EducationRecord | undefined;
  getEducationsForUser: (userId: number) => Array<EducationRecord>;
}

const EducationContext = React.createContext<IEducationContextProvider | null>(null);

export default EducationContext;
