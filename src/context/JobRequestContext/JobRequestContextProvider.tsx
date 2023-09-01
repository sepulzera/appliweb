import { useCallback, useMemo, useState } from 'react';

import { AnyComponent } from '../../types/Types';

import JobRequestContext, { IJobRequestContext } from './JobRequestContext';
import JobRequestRecord from './JobRequestRecord';
import JobRequestData from './JobRequestData.json';

/** {@link JobRequestContextProvider} Props. */
interface IJobRequestContextProviderProps {
  /** App container that should have access to the providers. */
  children: AnyComponent;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createJobRequestFromJson(input: any) {
  return new JobRequestRecord(input.id,
      input.userId,
      input.requestState, input.salary, input.job, input.city);
}

function getJobRequestMap() {
  const map: Map<number, JobRequestRecord> = new Map();
  let index, nextJobRequest;
  for (index = 0; index < JobRequestData.jobRequests.length; ++index) {
    nextJobRequest = createJobRequestFromJson(JobRequestData.jobRequests[index]);
    map.set(nextJobRequest.id, nextJobRequest);
  }
  return map;
}

/**
 * {@link JobRequestContext} Provider.
 *
 * @param props - {@link IJobRequestContextProviderProps}.
 */
const JobRequestContextProvider: React.FC<IJobRequestContextProviderProps> = ({
    children }: IJobRequestContextProviderProps) => {
  const [data] = useState(getJobRequestMap());

  const getJobRequest = useCallback((id: number): JobRequestRecord | undefined => {
    const jobRequest: JobRequestRecord | undefined = data.get(id);
    return jobRequest;
  }, [data]);

  const getJobRequestForUser = useCallback((userId: number): JobRequestRecord | undefined => {
    // eslint-disable-next-line no-restricted-syntax
    for (const entry of Array.from(data.entries())) {
      // const key = entry[0];
      const value = entry[1];
      if (value.userId === userId) {
        return value;
      }
    }

    return undefined;
  }, [data]);

  const value: IJobRequestContext = useMemo(() => ({
    data: data,
    getJobRequest: getJobRequest,
    getJobRequestForUser: getJobRequestForUser,
  }), [data, getJobRequest, getJobRequestForUser]);

  return (
    <JobRequestContext.Provider value={value}>
      {children}
    </JobRequestContext.Provider>
   );
};

export default JobRequestContextProvider;
