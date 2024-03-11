import React, { useState, useEffect } from 'react';
import './App.css';
import ToDoDisplay from './components/ToDoDisplay';
import ToDoForm from './components/ToDoForm';

function App() {
  const [toDos, setToDos] = useState([]);

  useEffect(() => {
   
    const storedToDos = JSON.parse(localStorage.getItem('toDos')) || [];
    setToDos(storedToDos);
  }, []);

  useEffect(() => {
   
    localStorage.setItem('toDos', JSON.stringify(toDos));
  }, [toDos]);

  const addToDo = (newToDo) => {
    setToDos([...toDos, newToDo]);
  };

  const removeToDo = (id) => {
    const updatedToDos = toDos.filter((todo) => todo.id !== id);
    setToDos(updatedToDos);
  };

  const toggleToDo = (id) => {
    const updatedToDos = toDos.map((todo) =>
      todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
    );
    setToDos(updatedToDos);
  };

  return (
    <div>
      <ToDoForm addToDo={addToDo} />
      <ToDoDisplay toDos={toDos} removeToDo={removeToDo} toggleToDo={toggleToDo} />
    </div>
  );
}

export default App;