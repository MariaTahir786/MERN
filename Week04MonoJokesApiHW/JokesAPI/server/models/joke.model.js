const mongoose=require('mongoose')

const JokeSchema=new mongoose.Schema({


setup:{
    type:String,
    required: [true, "setup is required"],
    minLength: [9, "setup must be at least 9 characters long"]
},
punchline:{
    type:String,
    required: [true, "punchline is required"],
        minLength: [6, "punchline must be at least 6 characters long"]
}

},
{timestamps:true})

const Joke=mongoose.model('Joke',JokeSchema)
module.exports=Joke;