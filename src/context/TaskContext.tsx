import React, { createContext, ReactNode, useMemo, useState } from 'react';

type TaskContextProps = {
  children: ReactNode;
};

type TaskContextType = {
  tasks: Array<string>;
  setTasks: (newState: Array<string>) => void;
};

const initialValue = {
  tasks: [''],
  setTasks: () => {},
};

export const TaskContext = createContext<TaskContextType>(initialValue);

export function TaskContextProvider({ children }: TaskContextProps) {
  const [tasks, setTasks] = useState(initialValue.tasks);
  const value = useMemo(() => ({ tasks, setTasks }), [tasks]);

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
