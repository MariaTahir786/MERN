import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import People from './components/People'
import Planet from './components/Planet'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

function App() {


  return (
    <>

      <BrowserRouter>
        <Form />
        <Routes>
          <Route path='/people/:optionID' element={<People />} />
          <Route path='/planets/:optionID' element={<Planet />}/>
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
