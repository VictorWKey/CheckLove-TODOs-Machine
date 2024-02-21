import React from 'react'
import "./TodoCounter.css"
import {TodoContext} from '../TodoContext'

function TodoCounter() {
  const {completed, total} = React.useContext(TodoContext);

  return (
    (completed === total) && (total > 0)
    ?
      <div className="TodoCounter">Completaste todos los TODOs!</div>
    :
      <h1 className='TodoCounter'>Has completado <span>{completed}</span> de <span>{total}</span> TODO´s</h1>
  )
}

export {
    TodoCounter
}