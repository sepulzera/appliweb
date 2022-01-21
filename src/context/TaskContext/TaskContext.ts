import { createContext } from 'react';
import TaskRecord from './TaskRecord';

export interface ITaskContext {
  data: Map<number, TaskRecord>;
  getTask: (id: number) => TaskRecord | undefined;
  getTasksForCareer: (careerId: number) => Array<TaskRecord>;
}

const TaskContext = createContext<ITaskContext | null>(null);

export default TaskContext;
