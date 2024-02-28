import React, { useState } from 'react'

const Album = (props) => {

    const { albumName, bandName, releaseYear: year, genre, albumSales } = props
    const [albumSold, setAlbumSold] = useState(albumSales)
    const albumSoldNum = () => { setAlbumSold(albumSold + 1) }
    return (
        <div>
            <h2>Album: {albumName}</h2>
            <h2>Artist:{bandName}</h2>
            <h2>Release Year:{year}</h2>
            <h2>Genre:{genre}</h2>
            <h2>Album Sold:{albumSold}</h2>
            <button onClick={albumSoldNum}>Buy</button>

        </div>
    )
}

export default Album