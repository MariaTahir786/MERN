//we ill split the routes and http methods we write after movie.controller we need to import movie http methods and schema so we import following two by require word 

const MovieController=require('../controllers/movie.controller')//to access every thing inside movie.controller
const Movie=require('../models/movie.model')
//import routes
//import routes
module.exports=(app)=>{

    app.get('/api/movies',MovieController.getAllMovies)//this fetch information from movie.controller class because we imported the class in line 3 and now we have access to all the methods in that class oops concept now update server.js

 
    //create a movie
    app.post('/api/movies',MovieController.createMovie)//thi sis coming from controller file


//Get One Movie
app.get('/api/movies/:id',MovieController.getOneMovie)


//Update movie
app.put('/api/movies/:id',MovieController.updateMovie)

//Delete Movie
app.delete('/api/movies/:id',MovieController.deleteMovie)
}