import React from 'react'
import "./TodoSearch.css"


function TodoSearch({search, setSearch}) {

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