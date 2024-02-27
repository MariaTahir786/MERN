import Product from './components/Product'
import Person from './components/Person'
import Movie from './components/Movie'
import './App.css'

function App() {


  return (
    <>
      <Product productName={"Water"} desc={"Just add 2 cups of water"} cost={"4.99"} />

      <Product productName={"Lemonade"} desc={"Just add 2 cups of water"} cost={"6.99"} />

      <Person firstName={"Maria"} lastName={"Tahir"} />

      <Movie movieName={" The Notebook"} releaseYear={1994} />
    </>
  )
}

export default App
