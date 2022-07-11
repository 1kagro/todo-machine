import React from 'react';

import { TodoContext } from "../TodoContext";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { Modal } from "../Modal";

function AppUI() {
    const {
        error,
        loading,
        filterTodos,
        toggleCompletedTodo,
        deleteTodo,
    } = React.useContext(TodoContext);
    return (
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>
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

            <Modal>
                <p>Teletransportación</p>
            </Modal>
            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };