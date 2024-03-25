import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Planet = () => {

const {optionID}=useParams()
const [responseData,setResponseData]=useState({})
const [isError,setIsError]=useState(false)

useEffect(() => {
    console.log("this is your id", optionID)
    // console.log("UseEffect Illustartion")
    axios.get(`https://swapi.dev/api/planets/${optionID}`)
    .then(res =>{
        console.log(res.data)
        setResponseData(res.data)
    })
    .catch(err=>{console.log(err)
        setIsError(err)
    })

}, [optionID])


if (!isError) {
    return (
        <div>
     <h1 style={{color:"blue"}}> Planet component</h1>
                <h1>{responseData.name}</h1>
                <p>Climate: {responseData.climate}</p>
                <p>Terrain: {responseData.terrain}</p>
                <p>Surface Water: {responseData.surface_water}</p>
                <p>Population: {responseData.population}</p>
        </div>
      ) 
}else{
    return(
    <>
    <img src="https://media.licdn.com/dms/image/C5612AQEPYce5KpNLyg/article-cover_image-shrink_720_1280/0/1551659700811?e=2147483647&v=beta&t=O9mBMiF-V12jCRJwaBNDWLKNL8cku2QSoCXtKP3vCHg" alt="yoda" style={{ width: "250px" }} />
    <p>"These are not the droids you are looking for"</p>
    </>
   )
}


 
}

export default Planet