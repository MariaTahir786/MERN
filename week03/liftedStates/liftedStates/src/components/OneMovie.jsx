import React from 'react'

const OneMovie = ({allMovies}) => {
  return (
    <div>
        <h1>Single Movie</h1>
        {
            allMovies.filter(movie=>movie.title==="Shrek").map((movie,idx) => {
                return (
                    <div key={idx}>
                    <h2>{movie.title}</h2>
                    <h2>{movie.year}</h2>
                    <h2>{movie.genre}</h2>
                    </div>
                )
            })
        }

    </div>
  )
}

export default OneMovie