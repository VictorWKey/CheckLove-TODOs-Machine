import React from 'react'
import "./TodoCounter.css"
import {TodoContext} from '../TodoContext'

function TodoCounter() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext);

  return (
    (completedTodos === totalTodos) && (totalTodos > 0)
    ?
      <div className="TodoCounter">Completaste todos los TODOs!</div>
    :
      <h1 className='TodoCounter'>Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODO´s</h1>
  )
}

export {
    TodoCounter
}