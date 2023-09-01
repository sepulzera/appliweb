import { createContext } from 'react';
import DescriptionRecord from './DescriptionRecord';

export type DescriptionLanguageMap = Map<string, DescriptionRecord>; // Map<language, description>

export interface IDescriptionContext {
  data: Map<number, DescriptionLanguageMap>;
  getDescription: (description: number, language: string) => DescriptionRecord | undefined;
}

const DescriptionContext = createContext<IDescriptionContext>({} as IDescriptionContext);

export default DescriptionContext;
