import React from 'react'
import "./TodoItem.css"

function TodoItem({text, completed}) {
  return (
    <li className='TodoItem'>
        <span className={`Icon Icon-check ${completed ? "Icon-check--active" : false}`}>V</span>
        <p className={`TodoItem-p ${completed ? "TodoItem-p--complete": false}`}>{text}</p>
        <span className='Icon Icon-delete'>X</span>
    </li>
  )
}

export {
    TodoItem
}