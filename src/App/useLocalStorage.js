import React from 'react'

// Custom Hook
function useLocalStorage(itemName,  initialValue){
    const [item, setItem] = React.useState(() => {
      const todosFromStorage = window.localStorage.getItem(itemName)
      if (todosFromStorage) return JSON.parse(todosFromStorage)
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      return []
    })
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName ,JSON.stringify( newItem ) );
      setItem(newItem);
    }
  
    return [item, saveItem]
  }

export {
    useLocalStorage
}