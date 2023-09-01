import { createContext } from 'react';

import CareerRecord from './CareerRecord';

export interface ICareerContext {
  data: Map<number, CareerRecord>;
  getCareer: (id: number) => CareerRecord | undefined;
  getCareersForUser: (userId: number) => Array<CareerRecord>;
}

const CareerContext = createContext<ICareerContext>({} as ICareerContext);

export default CareerContext;
