import React from 'react';
import CareerRecord from './CareerRecord';

interface ICareerContextProvider {
  data: Map<number, CareerRecord>;
  getCareer: (id: number) => CareerRecord | undefined;
  getCareersForUser: (userId: number) => Array<CareerRecord>;
}

const CareerContext = React.createContext<ICareerContextProvider | null>(null);

export default CareerContext;
