import React, { useEffect, useState } from 'react'

import './App.css';
import { TaskForm, TaskDiv } from './components'

const App = () => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    setTasks(tasks || []);
  }, []);

  function addTask(name) {
    setTasks(prev => {
      return [...prev, {name:name, done:false}];
    });
  }

  function removeTask(indexToRemove) {
    setTasks(prev => {
      return prev.filter((taskObject, index) => index !== indexToRemove);
    });
  }

  function updateTaskDone(taskIndex, newDone) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  function renameTask(index, newName) {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[index].name = newName;
      return newTasks;
    })
  }

  const numberComplete = tasks.filter(t => t.done).length;
  const numberTotal = tasks.length;

  function getMessage() {
    const percentage = numberComplete / numberTotal * 100;
    if (percentage === 0) {
      return 'Give it a shot! 🙏';
    }
    if (percentage === 100) {
      return 'Fantastic effort today! 🚀';
    }
    return 'Continue the momentum! 💪🏻'
  }

  return (
    <div className="App">
      <div className='tm-header'>
        <h1>Task Manager</h1>
      </div>
      <div className='tm-app'>
        <div className='task-count'>
          <h1>{numberComplete} / {numberTotal} Tasks Completed.</h1>
        </div>
        <div className='msg-header'>
          <h2>{getMessage()}</h2>
        </div>
        <TaskForm onAdd={addTask} />
        {tasks.map((task, index) => (
          <TaskDiv
            {...task}
            onRename={newName => renameTask(index, newName)}
            onTrash={() => removeTask(index)}
            onToggle={done => updateTaskDone(index, done)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
