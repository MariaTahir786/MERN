import React, { useState } from 'react'

const Person = (props) => {
    const increaseAge = () => { setBirthDayAge(birthDayAge + 1) }
    const { Name, Age, HairColor } = props
    const [birthDayAge, setBirthDayAge] = useState(Age)


    return (
        <div className="person-card">

            <h2>{Name}</h2>
            <p>Age: {birthDayAge}</p>
            <p>Hair Color:{HairColor}</p>
            <button onClick={increaseAge}>{Name}'s BD </button>

        </div>
    )
}

export default Person