
import Album from './components/Album'
import './App.css'

function App() {
  // const thisAlert = () => {
  //   alert("You clicked this event")
  // }

  return (
    <>

      {/* <h1 onClick={() => { alert("You clicked this event") }}>Click Me</h1> */}
      <Album albumName={"Human After all By"}
        bandName={"Daft Punk"}
        releaseYear={"2005"}
        genre={"Techno"}
        albumSales={25}
      />
    </>
  )

}

export default App
