import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';

function AppUI({
    completedTodos,
    totalTodos,
    search,
    setSearch,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
    return (
        <>
            <TodoCounter completed = {completedTodos} total = {totalTodos}/>

            <TodoSearch search = {search} setSearch={setSearch} />

            <TodoList>
            {searchedTodos.map(t => (<TodoItem
                key={t.text}
                text={t.text}
                completed={t.completed}
                onComplete = {() => completeTodo(t.text)}
                onDelete = {() => deleteTodo(t.text)}
            />))}
            </TodoList>

            <CreateTodoButton/>
        </>
        );
}

export {
    AppUI
}