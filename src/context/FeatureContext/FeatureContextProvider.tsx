import { useCallback, useMemo, useState } from 'react';

import { AnyComponent } from '../../types/Types';

import FeatureContext, { FeatureLanguageMap, IFeatureContext } from './FeatureContext';
import FeatureRecord from './FeatureRecord';
import FeatureData from './FeatureData.json';

/** {@link FeatureContextProvider} Props. */
interface IFeatureContextProviderProps {
  /** App container that should have access to the providers. */
  children: AnyComponent;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createFeatureFromJson(input: any) {
  return new FeatureRecord(input.id, input.language,
      input.title, input.image, input.data);
}

function getFeatureMap() {
  const map: Map<number, FeatureLanguageMap> = new Map();
  let index, nextFeature;
  for (index = 0; index < FeatureData.features.length; ++index) {
    nextFeature = createFeatureFromJson(FeatureData.features[index]);

    let featureLanguageMap: FeatureLanguageMap | undefined = map.get(nextFeature.id);
    if (featureLanguageMap == null) {
      featureLanguageMap = new Map<string, FeatureRecord>();
      map.set(nextFeature.id, featureLanguageMap);
    }

    featureLanguageMap.set(nextFeature.language, nextFeature);
  }
  return map;
}

/**
 * {@link FeatureContext} Provider.
 *
 * @param props - {@link IFeatureContextProviderProps}.
 */
const FeatureContextProvider: React.FC<IFeatureContextProviderProps> = ({
    children }: IFeatureContextProviderProps) => {
  const [data] = useState(getFeatureMap());

  const getFeature = useCallback((id: number, language: string): FeatureRecord | undefined => {
    const featureLanguageMap: FeatureLanguageMap | undefined = data.get(id);
    if (featureLanguageMap == null) return undefined;

    let featureRecord: FeatureRecord | undefined = featureLanguageMap.get(language);
    if (featureRecord == null) {
      featureRecord = featureLanguageMap.get(language.substring(0, language.indexOf('-')));
    }
    return featureRecord;
  }, [data]);

  const value: IFeatureContext = useMemo(() => ({
    data: data,
    getFeature: getFeature,
  }), [data, getFeature]);

  return (
    <FeatureContext.Provider value={value}>
      {children}
    </FeatureContext.Provider>
   );
};

export default FeatureContextProvider;
