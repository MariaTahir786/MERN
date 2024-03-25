import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const People = () => {

    const { optionID } = useParams()
    const [responseData, setResponseData] = useState({})
    const [isError, setIsError] = useState(false)
    const [homeworld, setHomeworld] = useState("")
    const [homeworldID, setHomeworldID] = useState()


    useEffect(() => {
        console.log("this is your id", optionID)
        // console.log("UseEffect Illustartion")
        axios.get(`https://swapi.dev/api/people/${optionID}`)
            .then(res => {
                console.log(res.data)
                setResponseData(res.data)

                getHomeworldId(res.data.homeworld)

                axios.get(res.data.homeworld)
                    .then(homeworldResponse => {
                        console.log(homeworldResponse.data.name)
                        setHomeworld(homeworldResponse.data.name)
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => {
                console.log(err)
                setIsError(err)
            })

    }, [optionID])

    const getHomeworldId = homeworldUrl => {
        //check for 1 character id
        if (homeworldUrl.charAt(homeworldUrl.length - 3) === "/") {
            const hwID = homeworldUrl.charAt(homeworldUrl.length - 2)
            setHomeworldID(hwID)
        } else {
            const firstCharId = homeworldUrl.charAt(homeworldUrl.length - 3)
            const secondCharId = homeworldUrl.charAt(homeworldUrl.length - 2)
            const idString = `${firstCharId}${secondCharId}`
            setHomeworldID(idString)
        }
    }

    if (!isError) {
        return (
            <div>

                <h1 style={{ color: "blue" }}> People component</h1>
                <h1>{responseData.name}</h1>
                <p>Height: {responseData.height}</p>
                <p>Hair color: {responseData.hair_color}</p>
                <p>Skin color: {responseData.skin_color}</p>
                <p>Eye Color: {responseData.eye_color}</p>
                <p>Homeworld: {homeworld}</p>
                <Link to={`/planets/${homeworldID}`}>homeworld</Link>
            </div>
        )
    } else {
        return (
            <>
                <img src="https://media.licdn.com/dms/image/C5612AQEPYce5KpNLyg/article-cover_image-shrink_720_1280/0/1551659700811?e=2147483647&v=beta&t=O9mBMiF-V12jCRJwaBNDWLKNL8cku2QSoCXtKP3vCHg" alt="yoda" style={{ width: "250px" }} />
                <p>"These are not the droids you are looking for"</p>
            </>
        )
    }

}

export default People