import { useCallback, useMemo, useState } from 'react';

import { AnyComponent } from '../../types/Types';

import LeisureContext, { ILeisureContext } from './LeisureContext';
import LeisureRecord from './LeisureRecord';
import LeisureData from './LeisureData.json';

/** {@link LeisureContextProvider} Props. */
interface ILeisureContextProviderProps {
  /** App container that should have access to the providers. */
  children: AnyComponent;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createLeisureFromJson(input: any) {
  return new LeisureRecord(input.id, input.userId, input.title, input.feature);
}

function getLeisureMap() {
  const map: Map<number, LeisureRecord> = new Map();
  let index, nextLeisure;
  for (index = 0; index < LeisureData.leisures.length; ++index) {
    nextLeisure = createLeisureFromJson(LeisureData.leisures[index]);
    map.set(nextLeisure.id, nextLeisure);
  }
  return map;
}

/**
 * {@link LeisureContext} Provider.
 *
 * @param props - {@link ILeisureContextProviderProps}.
 */
const LeisureContextProvider: React.FC<ILeisureContextProviderProps> = ({
    children }: ILeisureContextProviderProps) => {
  const [data] = useState(getLeisureMap());

  const getLeisure = useCallback((id: number): LeisureRecord | undefined => {
    const leisure: LeisureRecord | undefined = data.get(id);
    return leisure;
  }, [data]);

  const getLeisuresForUser = useCallback((userId: number): Array<LeisureRecord> => {
    const arr: Array<LeisureRecord> = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const entry of Array.from(data.entries())) {
      // const key = entry[0];
      const value = entry[1];
      if (value.userId === userId) {
        arr.push(value);
      }
    }

    return arr;
  }, [data]);

  const value: ILeisureContext = useMemo(() => ({
    data: data,
    getLeisure: getLeisure,
    getLeisuresForUser: getLeisuresForUser,
  }), [data, getLeisure, getLeisuresForUser]);

  return (
    <LeisureContext.Provider value={value}>
      {children}
    </LeisureContext.Provider>
   );
};

export default LeisureContextProvider;
