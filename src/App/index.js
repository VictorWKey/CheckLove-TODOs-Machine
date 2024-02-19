import React from 'react'
import { AppUI } from './AppUI';
import { useLocalStorage } from './useLocalStorage';


// const defaultTodos = [
//   {
//     text: "Tender la cama",
//     completed: true
//   },
//   {
//     text: "Lavar los trastes",
//     completed: false
//   },
//   {
//     text: "Hacer la tarea",
//     completed: false
//   },
//   {
//     text: "Barrer la casa",
//     completed: true
//   }
// ]



function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);

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
    <AppUI
      search={search}
      setSearch={setSearch}
      searchedTodos={searchedTodos}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
