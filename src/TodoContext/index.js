import React from 'react'
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext()

function TodoProvider({children}){
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage("TODOS_V1", []);

  const [search, setSearch] = React.useState("");

  const completedTodos = todos.filter(todo => todo.completed).length; // Estado derivado
  const totalTodos = todos.length; // Estado derivado

  const searchedTodos = todos.filter((item) => item.text.toLowerCase().includes(search.toLowerCase()));

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(todo => todo.text === text);
    newTodos[index].completed = !newTodos[index].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const index = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(index, 1);
    saveTodos(newTodos);
  };


  return (
    <TodoContext.Provider value = {{
      loading,
      error,
      completedTodos,
      totalTodos,
      search,
      setSearch,
      searchedTodos,
      completeTodo,
      deleteTodo
    }}>
      {children}
    </TodoContext.Provider>
  )
}

export {
    TodoProvider,
    TodoContext
}