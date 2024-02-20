import React from 'react'

// Custom Hook
function useLocalStorage(itemName,  initialValue){
  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false)
  React.useEffect(() => {
    try {
      window.setTimeout( () =>{
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        console.log("xd");
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      }, 2000)
    } catch (error) {
      setLoading(false);
      setError(true)
    }
  }, [])

  

  const saveItem = (newItem) => {
    localStorage.setItem(itemName ,JSON.stringify( newItem ) );
    setItem(newItem);
  }
  
  return {
    item,
    saveItem,
    loading,
    error
  }
}

export {
    useLocalStorage
}