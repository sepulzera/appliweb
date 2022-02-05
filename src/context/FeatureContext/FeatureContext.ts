import { createContext } from 'react';
import FeatureRecord from './FeatureRecord';

export type FeatureLanguageMap = Map<string, FeatureRecord>; // Map<language, feature>

export interface IFeatureContext {
  data: Map<number, FeatureLanguageMap>;
  getFeature: (feature: number, language: string) => FeatureRecord | undefined;
}

const FeatureContext = createContext<IFeatureContext | null>(null);

export default FeatureContext;
