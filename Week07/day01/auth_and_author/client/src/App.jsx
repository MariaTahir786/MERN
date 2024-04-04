import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DashBoard from './components/DashBoard'
import LoginForm from './components/LoginForm'

function App() {


  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route
            path='/' element={<RegistrationForm />} />
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/login' element={<LoginForm />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
