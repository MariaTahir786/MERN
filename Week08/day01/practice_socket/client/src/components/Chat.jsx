import React, { useEffect, useState } from 'react'

const Chat = ({ socket }) => {

    const [users, setUsers] = useState([])
    const [inputMessage, setInPutMessage] = useState('')

    //display new message 
    const [newMessage, setNewMessage] = useState([])

    useEffect(
        () => {
            socket.on('new-user', users => {
                setUsers(users)
            })
            socket.on('new-message', msg => {
                console.log(msg)
                setNewMessage(msg)
            })
        }, []
    )

    const submitHandler = e => {
        e.preventDefault()
        socket.emit('send-message', inputMessage)
        setInPutMessage('')
    }



    return (
        <div>
            <h1>Chat with Friends!</h1>
            <h2>Users Online:</h2>
            <ul>
                {
                    users.map((user, idx) => <li key={idx}>
                        {user.name}
                    </li>
                    )}
            </ul>
            <h2>Messenger</h2>
            <form onSubmit={submitHandler} >
                <label htmlFor="message">Message</label>
                <input type="text" value={inputMessage} onChange={e => setInPutMessage(e.target.value)} />
                <button>Send Message</button>
            </form>

            <h2>Messages: </h2>
            <ul>
                {
                    newMessage.map((msg, idx) => <li key={idx}>{msg}</li>)
                }
            </ul>

        </div>
    )
}

export default Chat