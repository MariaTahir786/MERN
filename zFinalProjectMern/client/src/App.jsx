import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import DisplayAllStores from './components/DisplayAllStores';
import StoreForm from './components/StoreForm';
import Nav from './components/Nav';
import DisplayOneStore from './components/DisplayOneStore';
import UpdateStore from './components/UpdateStore';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<DisplayAllStores />} />
        <Route path='/stores/create' element={<StoreForm />} />
        <Route path='/stores/:id' element={<DisplayOneStore />} />
        <Route path='/stores/edit/:id' element={<UpdateStore />} />
      </Routes>
    </>
  );
}

export default App;
