import React from 'react'
import "./TodoItem.css"

function TodoItem({text, completed, todos, setTodos}) {
  return (
    <li className='TodoItem'>
        <span 
          className={`Icon Icon-check ${completed ? "Icon-check--active" : false}`}
          onClick={()=>{
            const newTodos = [...todos];
            const index = newTodos.findIndex(todo => todo.text === text);
            newTodos[index].completed = !newTodos[index].completed;
            setTodos(newTodos);
          }}
        >V
        </span>
        <p className={`TodoItem-p ${completed ? "TodoItem-p--complete": false}`}>{text}</p>
        <span 
          className='Icon Icon-delete'
          onClick={()=>{
            const newTodos = [...todos];
            const index = newTodos.findIndex(todo => todo.text === text);
            newTodos.splice(index, 1);
            setTodos(newTodos);
          }}
        >X
        </span>
    </li>
  )
}

export {
    TodoItem
}