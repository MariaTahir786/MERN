
import React,{ useState } from 'react'

const ProjectManagerForm = () => {

const [productM,setProductM]=useState({
    title:"",
    price:"",
    description:""
})

const submitHandler=e=>{
e.preventDefault()
console.log(e)
setProductM({
    title:"",
    price:"",
    description:""
})
}
 
   const changeHandler= e=>{
    setProductM({...productM,[e.target.name]:e.target.value})
   }


  return (

    <div>
<form onSubmit={submitHandler} className='text-primary'>
    <h1>Product Manager</h1>
    <div>
<label htmlFor="title" className='form-label'>Title</label>
<input type="text" onChange={changeHandler} name='title' value={productM.title} className='form-control'/>
</div>

<div>
<label htmlFor="price">Price</label>
<input type="number" onChange={changeHandler} name='price' value={productM.price}/>
</div>

<div>
<label htmlFor="description">Description</label>
<input type="text"  onChange={changeHandler} name='description' value={productM.description}/>
</div>
<button type="submit">Create</button>
</form>
    </div>
  )
}

export default ProjectManagerForm