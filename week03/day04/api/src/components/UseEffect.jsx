import React,{useEffect,useState} from 'react'

const UseEffect = () => {
//lets 
    const [count,setCount]=useState(0)
//use effect is run after component is rendered, it runs automatically it takes two parameters first controls side effcts, becareful of 2nd component [] if not used properly it will be an it is used to handle apiinfinite loop....[]==is called dependency array which dependes on entire components which is rendered also we can control by passing a variable so pass count in it and see console 
useEffect(()=>{

    // alert("This is UseEffect")
console.log("UseStae is running")
// never use setCount in useeffect otherwise you will trappedecin infinite loop
//setCount(count+1)
},[count])



  return (
    <div>
<h1>This is from Use Effect component</h1>
<h2>{count}</h2>
<button onClick={()=>setCount(count+1)}>Click Here</button>
    </div>
  )
}

export default UseEffect