import React from 'react'
import { FaRegSquare } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";

const TaskCheckBox = ({ checked = false, onClick }) => {
  return (
    <div onClick={onClick}>
      {!checked && (
        <div className='checkbox unchecked'>
          <FaRegSquare size="1.5rem" />
        </div> 
      )}
      {checked && (
        <div className='checkbox checked'>
          <FaRegCheckSquare size="1.5rem" />
        </div>
      )}
    </div>
  )
}

export default TaskCheckBox