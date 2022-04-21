import React from 'react';
import './App.css';
import Title from './components/Title';
import AddItemForm from './components/AddItemForm';
import TaskDashboard from './components/TaskDashboard';
import { TaskContextProvider } from './context/TaskContext';

function App() {
  return (
    <div className="todoapp stack-large">
      <TaskContextProvider>
        <Title />
        <AddItemForm />
        <TaskDashboard />
      </TaskContextProvider>
    </div>
  );
}

export default App;
