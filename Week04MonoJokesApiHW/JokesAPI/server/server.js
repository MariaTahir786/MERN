const express =require('express')
const app=express()
const port=8000;

require('./config/jokes.config')

app.use(express.json(),express.urlencoded({extended:true}))


const allJokesRoutes=require('./routes/joke.routes')
allJokesRoutes(app)

app.listen(8000,()=>console.log(`listening to the ${port}`))