import React from 'react'
import "./TodoCounter.css"

function TodoCounter({completed, total}) {
  return ( 
    completed === total 
    ?
      <div className="TodoCounter">Completaste todos los TODOs!</div>
    :
      <h1 className='TodoCounter'>Has completado <span>{completed}</span> de <span>{total}</span> TODO´s</h1>
  )
}

export {
    TodoCounter
}