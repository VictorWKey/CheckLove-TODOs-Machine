import React from 'react'
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { TodoLoading } from '../TodoLoading';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';

function AppUI() {

    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal
    } = React.useContext(TodoContext)

    return (
        <>
            <TodoCounter/>

            <TodoSearch/>

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

            {openModal
                ?
            (<Modal>
                <TodoForm/>
            </Modal>)
                :
            null}
        </>
        );
}

export {
    AppUI
}