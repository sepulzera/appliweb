import * as React from 'react';

import { AnyComponent } from '../../types/Types';

import CareerContext from './CareerContext';
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
      input.place, input.begin, input.end,
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

/**
 * {@link CareerContext} Provider.
 *
 * @param props - {@link ICareerContextProviderProps}.
 */
const CareerContextProvider: React.FC<ICareerContextProviderProps> = (props: ICareerContextProviderProps) => {
  const [data] = React.useState(getCareerMap());

  const getCareer = (id: number): CareerRecord | undefined => {
    const education: CareerRecord | undefined = data.get(id);
    return education;
  };

  const getCareersForUser = (userId: number): Array<CareerRecord> => {
    const arr: Array<CareerRecord> = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const entry of Array.from(data.entries())) {
      // const key = entry[0];
      const value = entry[1];
      if (value.userId === userId) {
        arr.push(value);
      }
    }

    return arr;
  };

  return (
    <CareerContext.Provider value={{
      data: data,
      getCareer: getCareer,
      getCareersForUser: getCareersForUser,
    }}>
      {props.children}
    </CareerContext.Provider>
   );
};

export default CareerContextProvider;
