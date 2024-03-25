const Joke = require('../models/joke.model')
module.exports = {

    //get all Jokes
    getAllJokes: (req, res) => {
        Joke.find()
            .then((allJokes) => {
                console.log(allJokes)
                res.json(allJokes)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },


    //craete joke

    createJoke: (req, res) => {
        Joke.create(req.body)
            .then((newJoke) => {
                console.log(newJoke)
                res.json(newJoke)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },
    //update a joke
    updateJoke: (req, res) => {
        console.log(req.params)
        Joke.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then((updateJoke) => {
                console.log(updateJoke)
                res.json(updateJoke)
            })
            .catch(err => {
                console.log(err)
                res.status(400).json(err)
            })
    },
    //get one joke
    getOneJoke:(req,res)=>{
        console.log(req.params.id)
        Joke.findById(req.params.id)
        .then((oneJoke)=>{
            console.log(oneJoke)
            res.json(oneJoke)
        })
        .catch(err=>{
            console.log(err)
            res.status(400).json(err)
        })
    },

// Get a random joke
getRandomJoke: async (req, res) => {
    try {
        // Retrieve all jokes from the database
        const allJokes = await Joke.find();
        // Select a random index
        const randomIndex = Math.floor(Math.random() * allJokes.length);
        // console.log("randomIndex===============****************"+randomIndex)
        // Retrieve the random joke using the random index
        const randomJoke = allJokes[randomIndex];
        // Send the random joke as the response
        res.json(randomJoke);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal server error' });
    }
}


,
    //delete joke
    deleteJoke: (req, res) => {
        Joke.findByIdAndDelete(req.params.id)
            .then((deleteMovie) => {
                console.log(deleteJoke)
                res.json(this.deleteJoke)

            })
            .catch(err => {
                console.log(err => {
                    res.status(400).json(err)
                })
            })
    }
}