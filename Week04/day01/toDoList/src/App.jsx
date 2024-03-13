
import './App.css'
import { useState } from 'react'
import Form from './components/Form'
import Display from './components/Display'

function App() {
  //initialize the state for todo list
  const [toDoList, setToDoList] = useState([])//1
  return (
    <>
      <Form toDoList={toDoList} setToDoList={setToDoList} />
      <Display toDoList={toDoList} setToDoList={setToDoList} />

    </>
  )
}

export default App
