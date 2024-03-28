
//st1
const express=require('express')
const app=express()
const cors =require('cors')
const port=8000;

require('./config/mongoose.config')
//st2 

app.use(express.json(),express.urlencoded({extended:true}))

//install cors to connect server with client 
app.use(cors({origin:'http://localhost:5173'}))

// st6
const allBooksRoutes=require('./routes/book.routes')
allBooksRoutes(app)


app.listen(8000,()=>console.log(`Listening to port${port}`))