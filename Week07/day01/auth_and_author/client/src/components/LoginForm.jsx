
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'

const LoginForm = ({ saveExistingUser }) => {
    console.log("SAVE EXISTING USER IN LOGIN FORM", saveExistingUser)
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

    const [errorMessages, setErrorMessages] = useState({})
    const changeHandler = e => {
        // console.log(e)
        setUserData({ ...userData, [e.target.id]: e.target.value })
    }
    const submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/users/login', userData, { withCredentials: true })
            .then(res => {
                console.log(res.data.user);
                saveExistingUser(res.data.user)
                navigate('/dashboard')
            })
            .catch(err => {
                console.log(err.response.data)
                setErrorMessages(err.response.data)
                console.log("This error message", errorMessages)
            })

    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <div>
                    {errorMessages.message ? <p>{errorMessages.message}</p> : null}
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={changeHandler} id='email' />
                </div>
                <div>
                    {errorMessages.password ? <p>{errorMessages}</p> : null}
                    <label htmlFor="password"> Password</label>
                    <input type="password" onChange={changeHandler} id='password' />
                </div>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

export default LoginForm