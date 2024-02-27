//...
//Rest
const animals = ['horse', 'bat', 'bird', 'deer', 'fish', 'parrot']
const [firstan, secindan, ...restAnimals] = animals
console.log(restAnimals) //last
console.log(firstan)

//spread
const num1 = [1, 2, 3]
const num2 = [4, 5, 6]
const allNum = [...num1, ...num2, ...animals]


const object1 = {
    student: '1',
    studentID: 014563;
}
const obj2 = {
    student: '2',
    studentID: 014563;
}
const allStudent = {
    ...object1,
    ...allNum.obj2
}
console.log(
    allStudent
)