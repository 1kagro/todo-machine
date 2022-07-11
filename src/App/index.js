// import './App.css';

import React from "react";
import { AppUI } from "./AppUI"

// const defaultTodos = [
//   { id: 1, text: "Learn React", completed: true },
//   { id: 2, text: "Learn Python", completed: false },
//   { id: 3, text: "Learn Aws", completed: false },
// ];

function useLocalStorage(itemName, initialValue) {

  // manejo de loading y error en un solo estado
  // const [dataStatus, setDataStatus] = React.useState({loading: true, error:false})

  const [error, setError] = React.useState(false);
  const [loading, setloading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parseItem;
      
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parseItem = [];
        } else {
          parseItem = JSON.parse(localStorageItem);
        }
        
        setItem(parseItem);
        setloading(false);
        
      } catch (error) {
        setError(error);
      }
      
    }, 1000)
  });
  

  const saveItem = (newTodos) => {
    try {
      const stringifiedTodos = JSON.stringify(newTodos);
      localStorage.setItem(itemName, stringifiedTodos);
      setItem(newTodos);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {

  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage("TODOS_V1", []);

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
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = findIndex(text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  // React.useEffect(() => {
  //   console.log("useEffect");
  // }, [completedTodos])

  return (
    <AppUI
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filterTodos={filterTodos}
      toggleCompletedTodo={toggleCompletedTodo}
      deleteTodo={deleteTodo}
    /> 
  );
}

export default App;
