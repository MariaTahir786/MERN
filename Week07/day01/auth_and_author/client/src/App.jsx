import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import LoginForm from './components/LoginForm'

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  const saveExistingUser = userData => {
    const userObj = { ...userData, password: "" };
    setLoggedInUser(userObj);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegistrationForm />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/' element={<RegistrationForm saveExistingUser={saveExistingUser} />} />
          <Route path='/dashboard' element={<Dashboard loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />} />
          <Route path='/login' element={<LoginForm saveExistingUser={saveExistingUser} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
