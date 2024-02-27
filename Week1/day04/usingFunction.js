

const add=(props)=>{
    console.log("this is inside add function")
    console.log(props.num1+props.num2)
    return props.num1+props.num2
}

props={
    num1:4,
    num2:6
}

let sum=add(props)
console.log("this is sum from sum" + sum)