// import './App.css';

import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";

const defaultTodos = [
  { id: 1, text: "Learn React", completed: true },
  { id: 2, text: "Learn Python", completed: false },
  { id: 3, text: "Learn Aws", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  let filterTodos = todos.filter((todo) => (
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  ));
  const findIndex = (text) => (todos.findIndex(todo => todo.text === text));

  const toggleCompletedTodo = (text) => {
    const todoIndex = findIndex(text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = findIndex(text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
      <TodoList>
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
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
