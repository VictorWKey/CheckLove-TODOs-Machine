import React from 'react'
import "./TodoSearch.css"
import { TodoContext } from '../TodoContext'


function TodoSearch() {

  const {setSearch} = React.useContext(TodoContext)

  return (
    <input
      placeholder='Lavar los trastes'
      className='TodoSearch'
      onChange={e => setSearch(e.target.value)}
    />
  )
}

export {
    TodoSearch
}