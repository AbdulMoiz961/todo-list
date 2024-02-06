import React, { useState } from 'react'

const TaskForm = ({ onAdd }) => {

  const [taskName, setTaskName] = useState('');

  function handleSubmit(ev) {
    ev.preventDefault();
    onAdd(taskName);
    setTaskName('');
  }

  return (
    <div className='task-form'>
      <form onSubmit={handleSubmit} >
        <input 
          type="text"
          placeholder='Add Task...'
          value={taskName}
          onChange={ev => setTaskName(ev.target.value)}
        />
        <button>+</button>
      </form>
    </div>
  )
}

export default TaskForm