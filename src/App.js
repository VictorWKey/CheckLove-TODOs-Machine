import React from 'react'
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';

const defaultTodos = [
  {
    text: "Tender la cama",
    completed: true
  },
  {
    text: "Lavar los trastes",
    completed: false
  },
  {
    text: "Hacer la tarea",
    completed: false
  },
  {
    text: "Barrer la casa",
    completed: true
  }
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  console.log(todos);

  const [search, setSearch] = React.useState("");
  console.log(search);

  const completedTodos = todos.filter(todo => todo.completed).length; // Estado derivado
  const totalTodos = todos.length; // Estado derivado

  const searchedTodos = todos.filter((item) => item.text.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <TodoCounter completed = {completedTodos} total = {totalTodos}/>
      <TodoSearch search = {search} setSearch={setSearch} />

      <TodoList>
        {searchedTodos.map(t => (<TodoItem
          key={t.text}
          text={t.text}
          completed={t.completed}
          todos = {todos}
          setTodos= {setTodos}
      />))}
      </TodoList>

      <CreateTodoButton/>
    </>
  );
}

export default App;
