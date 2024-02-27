//call back function  which is passed ito another function as a parameter

var exampleFunc=function name(message) {
    console.log(message)
}
//exampleFunc("hello world")

function parentFunc(callBackFunc) {
  callBackFunc("its from parent function")  
}
parentFunc(exampleFunc)

//coffee order
function processOrder(callBackFunc) {
    console.log('order placed...please wait')

    setTimeout(()=>{
        console.log("processing")
        callBackFunc()
    },3000)
    
}

function pickUpOrder(){
    console.log('order is ready')
}

processOrder(pickUpOrder)


//mapping in js
 let numbers=[1,2,3,4,5,]
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]) ;
    
// }
let newNumbers=numbers.map(function (nums) {
    return nums*2
    
})

console.log(newNumbers)
let newArrowNum=numbers.map(nums=>nums*2)
console.log(newArrowNum)

//*Use the map() function to create a new array called prefixedNames that contains all the original names prefixed with "Mr./Ms.".
let names = ["Alice", "Bob", "Charlie", "Dana"];
let newPerfix=names.map(function(newPF){
    return "Mr./Ms."+newPF
})
console.log(newPerfix)


//filter() in js

let filterNums=[1,2,3,4,5,6];
// for (let i = 0; i < filterNums.length; i++) {
//    if (filterNums[i]%2==0) {
//     console,log(filterNums[i])
    
//    }
    
// }
let evenNums=filterNums.filter(function(nums) {
    return nums%2==0;
    
})
console.log(evenNums)





