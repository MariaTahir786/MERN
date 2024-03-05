import React from 'react'

const DisplayAllMovies = (props) => {
    const{allMovies}=props
  return (
    <div>
<h1>All movies</h1>
{
    allMovies.map((movie,idx)=>{
        return (
            <div key={idx}>
                <li>Title:{movie.title}</li>
                <li>Title:{movie.year}</li>
                <li>Title:{movie.genre}</li>
            </div>
        )
    })
}
    </div>
  )
}

export default DisplayAllMovies