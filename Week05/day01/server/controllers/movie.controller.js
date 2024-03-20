//this is used for http methods
//we need to use our schema and we have to import movie.model file

//we will use this movie multiple times thats why we stored in const Movie
const Movie = require('../models/movie.model')

module.exports = {

    //to get all movies once all path are set up we will call this method to see movies
    getAllMovies: (req, res) => {//here they are key value pairs
        // res.json({ message: "New Movie Created!!!" })

        Movie.find()
            .then((allMovies) => {
                console.log(allMovies)
                res.json(allMovies)
            })
            .catch((err) => {
                console.log(err)
                res.status(400).json(err)
            })

    },


    //Create a movie
    createMovie: (req, res) => {
        // console.log(req)
        Movie.create(req.body)
            .then((newMovie) => {
                console.log(newMovie)
                res.json(newMovie)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },

    //Get one by id
  
    getOneMovie: (req, res) => {
        //params are used to get dynamic elements by use params from apis//useParams hook look at this //we use colon in route to set dynamic url from user see line 56 
        Movie.findById(req.params.id)
            .then((oneMovie) => {
                console.log(oneMovie)
                res.json(oneMovie)
            })
            //if error occurs it go to catch
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            });
            ////we write this in movie.route file to get this 
              ////Get One Movie
// app.get('/api/movies/:id',MovieController.getOneMovie)// :id this should exact match with param ( Movie.findById(req.params.id)value in function in line 44 above then we will execute this route in post man to see a unique user // first use get method  and see all movies and then copy paste the id whatever you want to get and paste in new get request and see if its working // in project we can do this to retrieve one user by id...we are using postman here to create and other crud operations becoz we donot have user interface thats why for creating we are using post man 
    },

//Update a movie

updateMovie: (req, res) => {
    Movie.findByIdAndUpdate(req.params.id,req.body, {new:true,runValidators:true})
        //new true will get new value which we changed and validators will do validations on that
       

.then((updateMovie)=>{
    console.log(updateMovie)
    res.json(updateMovie)
})
 //if error occurs it go to catch
 .catch(err => {
    console.log(err)
    res.status(400).json(err)
});
},
// app.get('/api/movies/:id',MovieController.updateMovie)// :id this should exact match with param ( Movie.findById(req.params.id)value in function in line 44 above then we will execute this route in post man to see a unique user // first use get method  and see all movies and then copy paste the id whatever you want to get and paste in new get request and see if its working // in project we can do this to retrieve one user by id...we are using postman here to create and other crud operations becoz we donot have user interface thats why for creating we are using post man 


//Delete Movie
deleteMovie: (req, res) => {
    Movie.findByIdAndDelete(req.params.id)
        .then((deletedMovie) => {
            console.log(deletedMovie);
            res.json(deletedMovie)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
}
}