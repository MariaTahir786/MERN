import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {
//st2
const [option,setOption]=useState("")
const[optionID,setOptionID]=useState("")
const navigate=useNavigate()

const handleID=e=>{
setOptionID(e.target.value)
}

const handleSubmit=e=>{
    e.preventDefault();
navigate(`/${option}/${optionID}`)
setOptionID("")
}


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="search">Search For: </label>
                <select  onChange={e=>setOption(e.target.value)}>
                    <option value="">Select</option>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
            </div>
            <div>
                <label htmlFor="optionId">ID</label>
                <input type="text" onChange={handleID} value={optionID}/>
            </div>
            <input type="submit" value="Search" />
        </form>



    </div>
  )
}

export default Form