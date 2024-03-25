
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/jokes_Api', {
    useNewUrlParser: true,
    useUnifiedTopology: true //this will remove useless messages from terminal
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));