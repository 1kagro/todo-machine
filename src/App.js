// import './App.css';b

import React from "react";
import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoSearch } from "./TodoSearch/TodoSearch";
import { TodoList } from "./TodoList/TodoList";
import { TodoItem } from "./TodoItem/TodoItem";
import { CreateTodoButton } from "./CreateTodoButton/CreateTodoButton";

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
            completed={todo.completed} />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
