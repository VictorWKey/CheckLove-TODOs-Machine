import React from 'react'
import "./createTodoButton.css"

function CreateTodoButton() {
  return (
    <button className='CreateTodoButton' onClick={(event) => {
      console.log("Diste un click en el boton");
      console.log(event);
      console.log(event.target);
    }}>+</button>
  )
}

export {
    CreateTodoButton
}