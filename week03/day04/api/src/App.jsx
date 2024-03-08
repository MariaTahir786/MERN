import UseEffect from './components/UseEffect'
import axios from 'axios'
import './App.css'
import { useEffect,useState } from 'react'

function App() {
  //we use use state to display the latest values by setting the state
const[pokeTen,setPokeTen]=useState([])
  // const[poke,setPoke]=useState([])
  // //description is in other file
//  useEffect(()=>{
//   //axois library is used for api calls
// axios.get("https://pokeapi.co/api/v2/pokemon/bulbasaur")
// .then(res=>{
//  // console.log(res)log it and see what you want to set and display from console
//   console.log(res.data.name)
//   //after fetching the dat we will use the set state to display it on page see return <p>{poke}</p>
//   setPoke(res.data.name)
// })
// .catch(err=>{
//   console.log(err.data.name)
// })
//  },[])
  // second step
const getPokemons =()=>{
  axios.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
  .then(res=>{
    console.log(res.data.results)
    setPokeTen(res.data.results)
  })
  .catch(err=>{
    console.log(err.data.results)
  })
}


  return (
    <>
    {/* <p>Api walk through</p>
    <p>{poke}</p> */}
    {/* <UseEffect/> */}
{/* //step 1 */}
<p>Press to get first ten pokemon</p>
<button onClick={getPokemons}>Press Here!</button>
{/* //we map here beco z result is in form of array */}
{

  //first method of using map
// pokeTen.map((pokemon,idx)=>(
// <div key={idx}>
//   <p>Pokemon Name:{pokemon.name}</p>
// </div>
// )) see below method is another type of map we can use
pokeTen.map((pokemon,idx)=>{
  return <p key={idx}>Pokemon Name:{pokemon.name}</p>
})
}
    </>
  )
}

export default App
