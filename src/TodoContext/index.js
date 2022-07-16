import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage("TODOS_V1", []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    let filterTodos = todos.filter((todo) => (
        todo.text.toLowerCase().includes(searchValue.toLowerCase())
    ));
    const findIndex = (text) => (todos.findIndex(todo => todo.text === text));

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            id: newTodos.length + 1,
            completed: false,
            text,
        });
        saveTodos(newTodos);
    };

    const toggleCompletedTodo = (text) => {
        const todoIndex = findIndex(text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = findIndex(text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            filterTodos,
            addTodo,
            toggleCompletedTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };