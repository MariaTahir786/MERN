import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectManagerForm from './components/ProjectManagerForm'
import DisplayAllProducts from './components/DisplayAllProducts'
import DisplayOneProduct from './components/DisplayOneProduct'


function App() {


  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<ProjectManagerForm />} />
          <Route path="/products" element={<DisplayAllProducts />} />
          <Route path="/products/:id" element={<DisplayOneProduct />} />
        </Routes>
      </Router>
    </>

  )
}

export default App
