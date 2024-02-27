import React, { useState } from 'react'


const Product = (props) => {
    const { productName, price, desc, inStock } = props
    //       getter      setter are used i useState
    const [allInStock, setAllInStock] = useState(inStock);
    // const h1Alert = () => {
    //     alert("You clicked on this event")
    // }
    // Bilguun — Today at 7:27 PM
    // create a Movie components that have movieName, releaseYear and its ticket number. Whenever user buy the ticket, the number of ticket should be decremented
    return (
        <div>
            {/* 
            <h1 onClick={h1Alert}>This is Product Component</h1> */}
            <h1>{productName}</h1>
            <h2>
                ${price}
            </h2>
            <h2>{desc}</h2>
            <h3>inStock{allInStock}</h3>
            <button onClick={(event) => setAllInStock(allInStock - 1)}>Buy{productName}</button>
        </div>
    )
}

export default Product