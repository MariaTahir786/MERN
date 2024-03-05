import React,{useState}from 'react'
import OneMovie from './components/OneMovie';
import DisplayAllMovies from './components/DisplayAllMovies';
import MovieForm from './components/MovieForm'
import './App.css'

function App() {
  
  const [allMovie, setAllMovies] = useState([]);
  return (
    
    <>
      <MovieForm allMovies={allMovie} setAllMovies={setAllMovies}/>
      <DisplayAllMovies allMovies={allMovie}/>
      <OneMovie allMovies={allMovie}/>
    </>
  )
}

export default App
