import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoLoading } from '../TodoLoading';

function AppUI({
    loading,
    error,
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
            {<TodoCounter completed = {completedTodos} total = {totalTodos} loading = {loading}/>}

            <TodoSearch search = {search} setSearch={setSearch} />

            {loading ? (
                <>
                    <TodoLoading/>
                    <TodoLoading/>
                    <TodoLoading/>
                </>
            ) : null}
            {error ? <p> Ha ocurrido un error</p> : null}
            {!loading && !searchedTodos.length ? <p> Crea tu primer TODO</p> : null}

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