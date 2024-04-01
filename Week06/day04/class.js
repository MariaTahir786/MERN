//oopops component

class Human {

    //allow us to create an instance of human
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }

    //method or behavior
    sayHello() {
        console.log(`Hello ,I am ${this.name}`)

    }
}

//instance of human class
const bill = new Human('Bill', 27)
console.log(bill)
console.log(bill.name)

const Maria = new Human('Maria', 34)
Maria.sayHello()


//create student class student is also human which has age and name and also have other attributes 

class Student extends Human{

    constructor(name,age,currentStack){

        super(name,age)//super means coming from parent
        this.currentStack=currentStack

    }

    //polymorphism override parent method method name will be same only attributres of method will be differnt
    sayHello(){
        console.log(`Hello ,I am ${this.name} and I am studying ${this.currentStack} `)
    }
}

const nazkat=new Student('Nazakat',21,'Mern')
nazkat.sayHello()

const nazuk=new Student('Nazuk',24,'Java')
nazuk.sayHello()