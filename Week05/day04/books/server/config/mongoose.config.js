//st3 copy paste mongoose

const mongoose = require('mongoose')

//connection string i only changed database name marchMovieDB rest i copied from drive it remains same except database name
mongoose.connect('mongodb://127.0.0.1:27017/books_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true //this will remove useless messages from terminal
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
