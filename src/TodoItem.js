import React from 'react'
import "./TodoItem.css"

function TodoItem({text, completed, onComplete, onDelete}) {
  return (
    <li className='TodoItem'>
        <span 
          className={`Icon Icon-check ${completed ? "Icon-check--active" : false}`}
          onClick={onComplete}
        >V
        </span>
        <p className={`TodoItem-p ${completed ? "TodoItem-p--complete": false}`}>{text}</p>
        <span 
          className='Icon Icon-delete'
          onClick={onDelete}
        >X
        </span>
    </li>
  )
}

export {
    TodoItem
}