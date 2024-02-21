import React from 'react'
import "./TodoSearch.css"
import { TodoContext } from '../TodoContext'


function TodoSearch() {

  const {setSearch, search} = React.useContext(TodoContext)

  return (
    <input
      placeholder='Lavar los trastes'
      search = {search}
      className='TodoSearch'
      onChange={e => setSearch(e.target.value)}
    />
  )
}

export {
    TodoSearch
}