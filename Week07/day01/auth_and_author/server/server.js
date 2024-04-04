
//st1
const express=require('express')
const app=express()
const port=8000;
const cors =require('cors')
const cookieParser=require('cookie-parser')

require('./config/mongoose.config')
require('dotenv').config()//this is to use secret key which is in .env file and also we put cde for that in user.controller to generate random token to register user
app.use(cookieParser())
//st2 
app.use(cors({credentials:true ,origin:'http://localhost:5173'}))
app.use(express.json(),express.urlencoded({extended:true}))




// st6
require('./routes/user.routes')(app)



app.listen(8000,()=>console.log(`Listening to port${port}`))