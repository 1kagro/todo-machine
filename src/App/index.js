// import './App.css';

import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI"

// const defaultTodos = [
//   { id: 1, text: "Learn React", completed: true },
//   { id: 2, text: "Learn Python", completed: false },
//   { id: 3, text: "Learn Aws", completed: false },
// ];



function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
