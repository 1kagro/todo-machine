import React from 'react';

import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

function AppUI({
    error,
    loading,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    filterTodos,
    toggleCompletedTodo,
    deleteTodo,
}) {
    return (
        <React.Fragment>
            <TodoCounter
                total={totalTodos}
                completed={completedTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>

             {error && <p>Despérate, hubo un error...</p>}
             {loading && <p>Cargando...</p>}
             {(!loading && !filterTodos.length) && <p>¡Crea tu primer TODO!</p>}
                {filterTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onToggle={() => toggleCompletedTodo(todo.text)}
                        onDeleteTodo={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };