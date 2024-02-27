
import React from 'react'

const Product = (props) => {
    console.log(props)
    return (

        < div >
            <h1>Hello Product component</h1>
            {/* <h2>Water</h2>
            <p>Description: Just add 2 cups of water</p>
            <p>Price: $4.99</p> */}
            <h2>{props.productName}</h2>
            <p>Description: {props.desc}</p>
            <p>Price:$ref{props.cost}</p>
        </div >
    )
}

export default Product