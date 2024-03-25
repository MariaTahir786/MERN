
//st1
const express=require('express')
const app=express()
const port=8000;

require('./config/mongoose.config')
//st2 

app.use(express.json(),express.urlencoded({extended:true}))

// st6
const allBooksRoutes=require('./routes/book.routes')
allBooksRoutes(app)

app.listen(8000,()=>console.log(`Listening to port${port}`))