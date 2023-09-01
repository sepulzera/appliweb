import { createContext } from 'react';
import LeisureRecord from './LeisureRecord';

export interface ILeisureContext {
  data: Map<number, LeisureRecord>;
  getLeisure: (id: number) => LeisureRecord | undefined;
  getLeisuresForUser: (userId: number) => Array<LeisureRecord>;
}

const LeisureContext = createContext<ILeisureContext>({} as ILeisureContext);

export default LeisureContext;
