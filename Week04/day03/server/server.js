const express = require('express'); // This means to import express st1

//This means to create an instance of express st2
const app = express();

//This means to set the port to 8000 which is also going to be the base url st3
const port = 8000;

//Movies -- CRUD
// index will be the id for each value
const movies = [
    { title: "Star Wars", year: 1977 },
    { title: "The Matrix", year: 1999 },
    { title: "Shrek", year: 2001 }
]



app.use(express.json()); // This means to use express.json  it will aloow us to use http methods step[ 4]
app.use(express.urlencoded({ extended: true })) // This means to use urlencoded it will parse incoming request


//Routes step 5 it will send the request with express we can send any https method open postman abd in url http://localhost/api 
app.get('/api', (req, res) => {
    res.json({ message: "Hello World" })
})
//Methods step 6
// Create a movie
app.post('/api/movies', (req, res) => {
    console.log(req.body)
    movies.push(req.body)
    res.json({ message: "Created a movie" })
})

// HTTP Methods/Requests
//Get all movies
app.get('/api/movies', (req, res) => {
    res.json({ allTheMovies: movies })
})

//Get a movie by id
// here we assume that index number of the movie array is the id
app.get('/api/movies/:id', (req, res) => {
    console.log(req.params)
    const movie_id = req.params.id
    res.json(movies[movie_id])
})

//Update a movie
app.put('/api/movies/:id', (req, res) => {
    const movie_id = req.params.id;
    console.log(req.body)
    movies[movie_id] = req.body
    res.json({ status: "Success" })
})


//Delete
app.delete('/api/movies/:id', (req, res) => {
    const movie_id = req.params.id;
    movies.splice(movie_id, 1);
    res.json({ status: "Deleted" })
})



//step 3 hwree we are using our port and see server is running or not

app.listen(port, () => console.log(`Listening to port: ${port}`))