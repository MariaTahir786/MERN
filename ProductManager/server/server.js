const express=require('express')
const app=express()
const cors=require('cors')
const port=8000;

require ('./config/productM.config')
app.use(express.json(),express.urlencoded({extended:true}))

//
//install cors to connect server with client 
app.use(cors({origin:'http://localhost:5173'}))
 
//put routes over here from route
const allProductRoutes=require('./routes/product.routes')
allProductRoutes(app)
app.listen(8000,()=>console.log(`Listening to port${port}`))