import React from 'react';
import DescriptionRecord from './DescriptionRecord';

export type DescriptionLanguageMap = Map<string, DescriptionRecord>; // Map<language, description>

interface IDescriptionContextProvider {
  data: Map<number, DescriptionLanguageMap>;
  getDescription: (description: number, language: string) => DescriptionRecord | undefined;
}

const DescriptionContext = React.createContext<IDescriptionContextProvider | null>(null);

export default DescriptionContext;
