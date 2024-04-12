import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const LoginForm = ({ userName, setUserName, socket }) => {


    //once form is sumbitted we navigate t chat

    const navigate = useNavigate()

    const submitHandler = e => {
        e.preventDefault()
        socket.emit('login', userName)
        navigate('/chat')
    }


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submitHandler} >
                <label htmlFor="userName">User Name</label>
                <input type="text" onChange={e => { setUserName(e.target.value) }} />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginForm