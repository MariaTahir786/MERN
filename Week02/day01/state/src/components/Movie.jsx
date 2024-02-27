import React, { useState } from 'react'

const Movie = (props) => {
    const ticketsLeftBtn = () => { setTicketsLeft(ticketsLeft - 1) }
    const { movieName, releaseYear, tickets } = props
    const [ticketsLeft, setTicketsLeft] = useState(tickets)

    return (
        <div>
            <h1>{movieName}</h1>
            <h2>Release Year: {releaseYear}</h2>
            <h2>Tickets Left: {ticketsLeft}</h2>
            <button onClick={ticketsLeftBtn}>Buy{movieName} Tickets</button>

        </div>
    )
}

export default Movie