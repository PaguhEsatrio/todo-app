import React, { useState } from 'react';
import './App.css';
import { getTodos } from './database/todo';
import TodoList from './components/TodoList';

function App() {

  const [todos, _  ] = useState(getTodos());

  return (
    <>
      
      <h3>Todo App</h3>
      <TodoList todos={todos}/>
    </>
  )
}

export default App;