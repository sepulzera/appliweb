import React from 'react';
import LeisureRecord from './LeisureRecord';

interface ILeisureContextProvider {
  data: Map<number, LeisureRecord>;
  getLeisure: (id: number) => LeisureRecord | undefined;
  getLeisuresForUser: (userId: number) => Array<LeisureRecord>;
}

const LeisureContext = React.createContext<ILeisureContextProvider | null>(null);

export default LeisureContext;
