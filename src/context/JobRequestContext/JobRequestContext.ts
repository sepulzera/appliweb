import React from 'react';
import JobRequestRecord from './JobRequestRecord';

interface IJobRequestContextProvider {
  data: Map<number, JobRequestRecord>;
  getJobRequest: (id: number) => JobRequestRecord | undefined;
  getJobRequestForUser: (userId: number) => JobRequestRecord | undefined;
}

const JobRequestContext = React.createContext<IJobRequestContextProvider | null>(null);

export default JobRequestContext;
