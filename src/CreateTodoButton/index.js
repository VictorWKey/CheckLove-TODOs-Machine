import React from 'react'
import "./createTodoButton.css"
import { TodoContext } from '../TodoContext';

function CreateTodoButton() {

  const {setOpenModal} = React.useContext(TodoContext);

  return (
    <button className='CreateTodoButton' onClick={(event) => {
      setOpenModal(state => !state);
    }}>+</button>
  )
}

export {
    CreateTodoButton
}