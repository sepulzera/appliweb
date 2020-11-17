import React from 'react';
import FeatureRecord from './FeatureRecord';

export type FeatureLanguageMap = Map<string, FeatureRecord>; // Map<language, feature>

interface IFeatureContextProvider {
  data: Map<number, FeatureLanguageMap>;
  getFeature: (feature: number, language: string) => FeatureRecord | undefined;
}

const FeatureContext = React.createContext<IFeatureContextProvider | null>(null);

export default FeatureContext;
