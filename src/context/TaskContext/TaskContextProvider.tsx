import { useCallback, useMemo, useState } from 'react';

import { AnyComponent } from '../../types/Types';

import TaskContext, { ITaskContext } from './TaskContext';
import TaskRecord from './TaskRecord';
import TaskData from './TaskData.json';

/** {@link TaskContextProvider} Props. */
interface ITaskContextProviderProps {
  /** App container that should have access to the providers. */
  children: AnyComponent;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createTaskFromJson(input: any) {
  return new TaskRecord(input.id, input.userId, input.title, input.feature,
      input.description, input.careerId);
}

function getTaskMap() {
  const map: Map<number, TaskRecord> = new Map();
  let index, nextTask;
  for (index = 0; index < TaskData.tasks.length; ++index) {
    nextTask = createTaskFromJson(TaskData.tasks[index]);
    map.set(nextTask.id, nextTask);
  }
  return map;
}

/**
 * {@link TaskContext} Provider.
 *
 * @param props - {@link ITaskContextProviderProps}.
 */
const TaskContextProvider: React.FC<ITaskContextProviderProps> = ({
    children }: ITaskContextProviderProps) => {
  const [data] = useState(getTaskMap());

  const getTask = useCallback((id: number): TaskRecord | undefined => {
    const education: TaskRecord | undefined = data.get(id);
    return education;
  }, [data]);

  const getTasksForCareer = useCallback((careerId: number): Array<TaskRecord> => {
    const arr: Array<TaskRecord> = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const entry of Array.from(data.entries())) {
      // const key = entry[0];
      const value = entry[1];
      if (value.careerId === careerId) {
        arr.push(value);
      }
    }

    return arr;
  }, [data]);

  const value: ITaskContext = useMemo(() => ({
    data: data,
    getTask: getTask,
    getTasksForCareer: getTasksForCareer,
  }), [data, getTask, getTasksForCareer]);

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
   );
};

export default TaskContextProvider;
