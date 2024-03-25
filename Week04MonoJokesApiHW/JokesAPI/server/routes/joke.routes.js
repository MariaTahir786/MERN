const JokeController=require('../controllers/joke.controller')
module.exports=app=>{
    //get joke
    app.get('/api/jokes',JokeController.getAllJokes)
    //get one book
    app.get('/api/jokes/:id',JokeController.getOneJoke)
    //create joke
    app.post('/api/jokes',JokeController.createJoke)
    app.put('/api/jokes/:id',JokeController.updateJoke)
    //get random joke

    app.get('/api/jokes/random',JokeController.getRandomJoke)
}