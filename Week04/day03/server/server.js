const express=require('express')//to import express from library st1

//create instance of this express to use it many times its name must always be app st2
const app=express()//we will use app 

//create portal host to 8000 which means which is also the base url st3
const port=8000;

//as we don't haves o we use info from here st7
//Movies--Crud
//index will be the id for each value
const movies=[
    {title:"star Wars",year:1977},
    {title:"The Matrix",year:1976},
    {title:"shrek",year:1999}
]


app.use(express.json())//means to use express.json st5
app.use(express.urlencoded({extended:true}))//function to allow us to use http methods parse incoming request 

//create a route//st6
//Route its our base url
app.get('/api',(req,res)=>{
    res.json({message:"Hello world"})
})

//step 8 usage
//Methods
//get all movies
//http methods we are using this in post man and retrieving the information there by get http://localhost:8000/api/movies
app.get('/api/movies',(req,res)=>{
    res.json({movies:movies})//as we are getting all movies
})

//create a movie step 9 we have to create movie in postman body raw json format and all other crud operations
app.post('/api/movies',(req,res)=>{
    console.log(req.body)
    movies.push(req.body)//going to add value at the end of array movies
    res.json({message:"created a movie"})//then we have to post this in body =>raw of post man {
    //     "title":"barbie",
    //     "year":"2020"
    // }
})

//Get a movie by id //now get specific information
//here index number of movie array is id
//for dynamic value use ":" params
app.get('/api/movies/:id',(req,res)=>{
    console.log(req.params)
    const movie_id=req.params.id
    res.json(movies[movie_id])
})

//Update movie
app.put('/api/movies/:id',(req,res)=>{
   const movie_id=req.params.id
console.log(req.body)
movies[movie_id]=req.body
res.json({status:"Success"})
})
//delete movie
app.delete('/api/movies/:id',(req,res)=>{
    const movie_id=req.params.id
    movies.splice(movie_id,1)
    res.json({status:"Deleted"})

})



app.listen(port,()=>console.log(`listening to port :${port}`))//st4