import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import DisplayAllBooks from './components/DisplayAllBooks'
import BookForm from './components/BookForm'
import DisplayOneBook from './components/DisplayOneBook'
import UpdateBook from './components/UpdateBook'

function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<DisplayAllBooks />}></Route>
        <Route path='/books/create' element={<BookForm />}></Route>
        <Route path='/books/:id' element={<DisplayOneBook />}></Route>
        <Route path='/books/edit/:id' element={<UpdateBook />}></Route>
      </Routes>
    </>
  )
}

export default App
