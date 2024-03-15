import { useState } from 'react'
import './App.css'
import Nav from './assets/components/Nav'
import Home from './assets/components/Home'
import People from './assets/components/People'
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom'



function App() {


  return (
    <>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/people' element={<People/>}/>

        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App
