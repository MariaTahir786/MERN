import { Component } from 'react'
import './App.css'
import MovieForm from './components/MovieForm'
class App extends Component {

  state = {  //how we pass info from parent to child in oops concept 
    movies: [{ title: 'Barbie', year: 2023 }, { title: 'other Mother', Year: 2004 }]
  }

  //to update the new value which user types so we use spread operator and assign new movie
  addNewMovie = (newMovie) => {
    this.setState({
      movies: [...this.state.movies, newMovie]
    })
  }


  render() {
    return (
      <>
        {/* //how we send from parent to child */}
        <MovieForm addNewMovie={this.addNewMovie} />
        {
          this.state.movies.map((movie, idx) => {
            return (


              <div key={idx}>
                <h2>Movie Title:{movie.title}</h2>
                <p>Release Year:{movie.year}</p>
              </div>
            )
          })
        }
      </>
    )

  }

}

export default App
