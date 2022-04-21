import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';

function AddItemForm() {
  const [inputValue, setInputValue] = useState<string>('');
  const domInputId = 'new-todo-input';
  const { tasks, setTasks } = useContext(TaskContext);

  return (
    <form>
      <h2 className="label-wrapper">
        <label htmlFor={domInputId} className="label__lg">
          Lista de tarefas PodCodar
        </label>
      </h2>
      <input
        type="text"
        id={domInputId}
        className="input input__lg"
        name={domInputId}
        autoComplete="off"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        type="button"
        className="btn btn__primary btn__lg"
        onClick={() => {
          tasks.push(inputValue);
          setTasks([...tasks]);
        }}
      >
        Add Task
      </button>
    </form>
  );
}
export default AddItemForm;
