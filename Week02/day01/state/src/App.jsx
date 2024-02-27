
import Product from './components/Product'
import Movie from './components/Movie'
import './App.css'

function App() {

  return (
    <>
      <Product productName={"Stanley"} price={"132"} desc={"Very Expensive water bottle"} inStock={"15"} />
      <Movie movieName={"Tangled"} releaseYear={"2022"} tickets={50} />
    </>
  )
}

export default App
