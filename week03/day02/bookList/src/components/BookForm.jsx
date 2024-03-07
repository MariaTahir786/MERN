import React,{useState} from 'react'
// this Bookname is coming from app  from component as a prop
const BookForm = ({newBook}) => {

  const [singleBook, setSingleBook]=useState("") 


//validate our book length function we willl use it submitHandlerr
  const [errors, setErrors]=useState("")
  const bookValidation=()=>{
    let isValid=true;
    if(singleBook.length<3){
      isValid=false
    }
    return isValid;
  }

  const submitHandler=e=>{
    e.preventDefault()
    if (bookValidation()){

   
    //this is coming from app
newBook({
  //we need unique id to manipulte book so also store move
oneBook:singleBook ,
isComplete: false,
id:Math.floor(Math.random()*100000).toString()
})
setSingleBook("")
setErrors("")
  }else{
    setErrors("The book name should be at least 3 chars long")
    setSingleBook("")
  }
}



const changeHandler=e=>{
  setSingleBook(e.target.value)
}

  return (
    <div>
      {
        errors?<h3 style={{color:"red"}}>{errors}</h3>:null
      }
      <form  onSubmit={submitHandler}>
        <div>
          <label htmlFor="book">Add a Book</label>
          <input type="text" onChange={changeHandler} value={ singleBook} />
        </div>
        <input type="submit" value="Add"  style={{
          marginTop:"25px",
          marginLeft:"5px"
        }}/>
      </form>
    </div>
  )
}

export default BookForm