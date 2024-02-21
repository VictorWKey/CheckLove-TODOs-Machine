import React from 'react'
import "./TodoForm.css"
import { TodoContext } from '../TodoContext'

function TodoForm() {
  const {
    addTodo,
    setOpenModal,
    isDuplicated
  } = React.useContext(TodoContext)

  const [newTodo, setNewTodo] = React.useState("");

  const isDescriptionValid = (newTodo.length >= 0) ? true : false;

  const onSubmit = (e) => {
    e.preventDefault()

    if (!isDescriptionValid) return;

    if (isDuplicated(newTodo)) return;

    setOpenModal(false);
    addTodo(newTodo.trim());
  }

  const onCancel = () => {
    setOpenModal(false);
  }

  const onChange = (e) => {
    setNewTodo(e.target.value)
  }

  return (
    <form onSubmit={onSubmit} onClick={e => e.stopPropagation()}>
      <label >Escribe tu nuevo TODO </label>
      <textarea onChange = {onChange} placeholder='Cortar cebolla'/>
      <div className='TodoForm-buttonContainer'>
        <button onClick = {onCancel} type = "button" className='TodoForm-button TodoForm-button--cancel'>
          Cancelar
        </button>
        <button type = "submit" className='TodoForm-button TodoForm-button--add'>
          Añadir
        </button>
      </div>
      <p className={isDuplicated(newTodo) ? `TodoForm-warning--on` :`TodoForm-warning--off` }>Ese TODO ya existe</p>
    </form>
  )
}

export {TodoForm}