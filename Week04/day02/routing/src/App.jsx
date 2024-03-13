import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage'
import Home from './components/Home'
import Nav from './components/Nav'
import Word from './components/Word'
import Form from './components/Form'

function App() {


  return (
    <>
      {/* First Step  */}
      <BrowserRouter>
        {/* <h1>Routing practice</h1> */}
        <Nav />
        <Routes>

          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          {/* when page do not exist */}
          <Route path='/:unicorn/:color' element={<Word />} />
          <Route path='/form' element={<Form />} />
          <Route path='/*' element={<h1>404  not found</h1>} />
        </Routes>
      </BrowserRouter>
      {/* we can do the same thing in main.jsx instead of app it will do the same thing
    <BrowserRouter>
     <h1>Routing practice</h1>
     <Routes>
<Route path='/' element={<LandingPage/>}/>
<Route path='/home' element={<Home/>}/>
     </Routes>
    </BrowserRouter> */}


    </>
  )
}

export default App
