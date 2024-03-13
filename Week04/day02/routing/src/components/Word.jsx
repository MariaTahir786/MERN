import React from 'react'
import { useParams } from 'react-router-dom'


const Word = () => {

const {unicorn, color}=useParams()

  return (
    <div>
        <h1 style={{color:color}}>Your word is.....{unicorn} and your color is {color}</h1>
    </div>
  )
}

export default Word