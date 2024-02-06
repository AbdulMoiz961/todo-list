import React, { useState } from 'react';
import TaskCheckbox from './TaskCheckbox';
import { FaTrash } from "react-icons/fa";

const TaskDiv = ({ name, done, onToggle, onTrash, onRename }) => {

  const [editMode, setEditMode] = useState(false);

  return (
    <div className={'task ' + (done ? 'done' : '')}>

      <TaskCheckbox checked={done} onClick={() => onToggle(!done)} />
      {!editMode && (
        <div className='task-name' onClick={() => setEditMode(prev => !prev)}>
          <span>{name}</span>
        </div>
      )}
      {editMode && (
        <form 
          onSubmit={ev => {
            ev.preventDefault();
            setEditMode(false);
        }}>
          <input 
            type="text" 
            value={name}
            onChange={ev => onRename(ev.target.value)} 
          />
        </form>
      )}
      <button className='trash' onClick={onTrash}>
        <FaTrash size={"1rem"} />
      </button>
      
    </div>
  )
}

export default TaskDiv