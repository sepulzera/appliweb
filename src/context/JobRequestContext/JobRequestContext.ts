import { createContext } from 'react';
import JobRequestRecord from './JobRequestRecord';

export interface IJobRequestContext {
  data: Map<number, JobRequestRecord>;
  getJobRequest: (id: number) => JobRequestRecord | undefined;
  getJobRequestForUser: (userId: number) => JobRequestRecord | undefined;
}

const JobRequestContext = createContext<IJobRequestContext>({} as IJobRequestContext);

export default JobRequestContext;
