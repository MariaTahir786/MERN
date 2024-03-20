//1st
const express =require('express')
const app=express();

const port=8000;

//4 we import monfgoose here its only called one time thats why we didnot stored in variable 
require('./config/mongoose.config')



// step2 ==middleware==> convert response into json format url encoded allow to craete key and pair values
app.use(express.json(),express.urlencoded({extended:true}))

// 1.after step2 in config go and connect to db mongoose.config.js
//2 create blue print of data to create schema we did movie.models.js we set data types we put timestamp in that 
//3 now go to movie.controller to get and it will return all data 
//4 now create route for api and import models and controller to fetch their data nad use it we create instance (copy) of controller file with .notation we can access all its function and we will export it to server .js this one so we can use this route to send request to api





//st5 coming from movie routes
const movieRoutes=require('./routes/movie.routes')
movieRoutes(app)

 //step 3 it will activate the server 
 app.listen(port, () => console.log(`Listening to port: ${port}`))
