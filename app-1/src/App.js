import React, { useState } from 'react'
import './App.css';
import List from './components/List';
import AddTodo from './components/AddTodo'

function App() {
  const [toDos, setToDos] = useState([])

  function addTodo(item) {
    const newTodos = [...toDos, item]
    setToDos(newTodos)
  }
  return (
    <div className="App">
      <AddTodo addTodo={addTodo} />
      <List list={toDos} />
    </div>
  );
}

export default App;
