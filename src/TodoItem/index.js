import React from 'react'
import "./TodoItem.css"
import { CompleteIcon } from '../TodoIcon/CompleteIcon'
import { DeleteIcon } from '../TodoIcon/DeleteIcon'

function TodoItem({text, completed, onComplete, onDelete}) {
  return (
    <li className='TodoItem'>

        <CompleteIcon onComplete ={onComplete} completed = {completed}/>
        <p className={`TodoItem-p ${completed ? "TodoItem-p--complete": false}`}>{text}</p>

        <DeleteIcon onDelete = {onDelete}/>
    </li>
  )
}

export {
    TodoItem
}