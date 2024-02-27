import React from 'react'

const Person = (props) => {
    return (
        <div><h1>Hello</h1>

            <h2>{props.firstName}{" "}{props.lastName}</h2>



        </div>
    )
}

export default Person