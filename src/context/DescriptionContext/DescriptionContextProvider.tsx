import { useCallback, useMemo, useState } from 'react';

import { AnyComponent } from '../../types/Types';

import DescriptionContext, { DescriptionLanguageMap, IDescriptionContext } from './DescriptionContext';
import DescriptionRecord from './DescriptionRecord';
import DescriptionData from './DescriptionData.json';

/** {@link DescriptionContextProvider} Props. */
interface IDescriptionContextProviderProps {
  /** App container that should have access to the providers. */
  children: AnyComponent;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createDescriptionFromJson(input: any) {
  return new DescriptionRecord(input.id, input.language, input.data);
}

function getDescriptionMap() {
  const map: Map<number, DescriptionLanguageMap> = new Map();
  let index, nextDescription;
  for (index = 0; index < DescriptionData.descriptions.length; ++index) {
    nextDescription = createDescriptionFromJson(DescriptionData.descriptions[index]);

    let descriptionLanguageMap: DescriptionLanguageMap | undefined = map.get(nextDescription.id);
    if (descriptionLanguageMap == null) {
      descriptionLanguageMap = new Map<string, DescriptionRecord>();
      map.set(nextDescription.id, descriptionLanguageMap);
    }

    descriptionLanguageMap.set(nextDescription.language, nextDescription);
  }
  return map;
}

/**
 * {@link DescriptionContext} Provider.
 *
 * @param props - {@link IDescriptionContextProviderProps}.
 */
const DescriptionContextProvider: React.FC<IDescriptionContextProviderProps> = ({
    children }: IDescriptionContextProviderProps) => {
  const [data] = useState(getDescriptionMap());

  const getDescription = useCallback((id: number, language: string): DescriptionRecord | undefined => {
    const descriptionLanguageMap: DescriptionLanguageMap | undefined = data.get(id);
    if (descriptionLanguageMap == null) return undefined;

    let descriptionRecord: DescriptionRecord | undefined = descriptionLanguageMap.get(language);
    if (descriptionRecord == null) {
      descriptionRecord = descriptionLanguageMap.get(language.substring(0, language.indexOf('-')));
    }
    return descriptionRecord;
  }, [data]);

  const value: IDescriptionContext = useMemo(() => ({
    data: data,
    getDescription: getDescription,
  }), [data, getDescription]);

  return (
    <DescriptionContext.Provider value={value}>
      {children}
    </DescriptionContext.Provider>
   );
};

export default DescriptionContextProvider;
