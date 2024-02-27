import React from 'react'

const Movie = props => {
    const { movieName: MN, releaseYear: RY } = props
    return (
        <div>
            <h1>Movie</h1>
            {/* <h2>Movie Name:MN</h2>
            <h2>Release Year: RY</h2> */}
            <h2>Movie Name:{MN}</h2>
            <h2>Release Year:{RY} </h2>

        </div>
    )
}

export default Movie