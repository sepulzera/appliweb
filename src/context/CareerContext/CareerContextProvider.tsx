import { useCallback, useMemo, useState } from 'react';

import { AnyComponent } from '../../types/Types';

import CareerContext, { ICareerContext } from './CareerContext';
import CareerRecord from './CareerRecord';
import CareerData from './CareerData.json';

/** {@link CareerContextProvider} Props. */
interface ICareerContextProviderProps {
  /** App container that should have access to the providers. */
  children: AnyComponent;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createCareerFromJson(input: any) {
  return new CareerRecord(input.id, input.userId, input.title, input.feature,
      input.place, input.begin, input.end, input.short,
      input.description);
}

function getCareerMap() {
  const map: Map<number, CareerRecord> = new Map();
  let index, nextCareer;
  for (index = 0; index < CareerData.careers.length; ++index) {
    nextCareer = createCareerFromJson(CareerData.careers[index]);
    map.set(nextCareer.id, nextCareer);
  }
  return map;
}

function sortByTimeDesc(a: CareerRecord, b: CareerRecord): number {
  const aEnd = a.end;
  const bEnd = b.end;
  if (aEnd == null && bEnd == null) {
    const aBeginTime = a.begin.getTime();
    const bBeginTime = b.begin.getTime();
    if (aBeginTime === bBeginTime) return 0;
    else if (aBeginTime < bBeginTime) return 1;
    else return -1;
  } else if (aEnd == null && bEnd != null) {
    return -1;
  } else if (aEnd != null && bEnd == null) {
    return 1;
  } else if (aEnd != null && bEnd != null) {
    const aEndTime = aEnd.getTime();
    const bEndTime = bEnd.getTime();
    if (aEndTime === bEndTime) {
      const aBeginTime = a.begin.getTime();
      const bBeginTime = b.begin.getTime();
      if (aBeginTime === bBeginTime) return 0;
      else if (aBeginTime < bBeginTime) return 1;
      else return -1;
    } else if (aEndTime < bEndTime) {
      return 1;
    } else {
      return -1;
    }
  }

  return 0;
}

/**
 * {@link CareerContext} Provider.
 *
 * @param props - {@link ICareerContextProviderProps}.
 */
const CareerContextProvider: React.FC<ICareerContextProviderProps> = ({
    children }: ICareerContextProviderProps) => {
  const [data] = useState(getCareerMap());

  const getCareer = useCallback((id: number): CareerRecord | undefined => {
    const education: CareerRecord | undefined = data.get(id);
    return education;
  }, [data]);

  const getCareersForUser = useCallback((userId: number): Array<CareerRecord> => {
    const arr: Array<CareerRecord> = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const entry of Array.from(data.entries())) {
      // const key = entry[0];
      const value = entry[1];
      if (value.userId === userId) {
        arr.push(value);
      }
    }

    return arr.sort(sortByTimeDesc);
  }, [data]);

  const value: ICareerContext = useMemo(() => ({
    data: data,
    getCareer: getCareer,
    getCareersForUser: getCareersForUser,
  }), [data, getCareer, getCareersForUser]);

  return (
    <CareerContext.Provider value={value}>
      {children}
    </CareerContext.Provider>
   );
};

export default CareerContextProvider;
