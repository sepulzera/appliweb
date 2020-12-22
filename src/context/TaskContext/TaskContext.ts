import React from 'react';
import TaskRecord from './TaskRecord';

interface ITaskContextProvider {
  data: Map<number, TaskRecord>;
  getTask: (id: number) => TaskRecord | undefined;
  getTasksForCareer: (careerId: number) => Array<TaskRecord>;
}

const TaskContext = React.createContext<ITaskContextProvider | null>(null);

export default TaskContext;
