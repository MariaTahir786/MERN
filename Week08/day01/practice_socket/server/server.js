const express = require('express')
const app = express()
const cors = require('cors')
const socket = require('socket.io')
const port = 8000;


app.use(cors());


const server = app.listen(port, () => { console.log(`Listening to port:${port}`) })

const io = socket(server, {
    cors: {
        //front end url
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        allowedHeaders: ['*'],
        credentials: true
    }
})

//array to store current users 
let users = [];
//store users messages 
let messages = [];



//make connection on is a biult in finction from io library
io.on(
    'connection', socket => {
        console.log("NEW CLIENT CONNECTED")
        console.log('socket id', socket.id)

        //this is login  event for when user login it will tell to backend that user logged in and emit the user and return the user messages to backend
        //look its used 'login' in login form as a key in submit handler 
        //when ever there is new user this function will kick in and return user 
        socket.on('login', data => {
            console.log(data);
            users.push({ name: data, id: socket.id });
            io.emit('new-user', users)

        })

        //event for sending messages got from one user to another user onec euser submit the for we need to handle itlook it chat.jsx submit handler 'send -message key must match with what we have it
        socket.on('send-message', data => {
            console.log(data)
            messages.push(data)
            console.log(data)
            io.emit('new-message', messages)
        })






    })