import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const RegistrationForm = () => {

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [errorMessages, setErrorMessages] = useState({

    })

    const navigate = useNavigate()

    const changeHandler = e => {
        console.log(e)
        setUserData({ ...userData, [e.target.id]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/users/register', userData, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                navigate('/dashboard')
            })
            .catch(err => {
                console.log(err.response.data.errors)
                setErrorMessages(err.response.data.errors)
            })
        console.log("first")

    }



    return (
        <div>
            <h1>Registration</h1>
            <p>Already registered ?<Link to='/login'>Log in</Link></p>
            <form onSubmit={submitHandler}>
                <div>
                    {errorMessages.firstName ? <p>{errorMessages.firstName.message}</p> : null}
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" onChange={changeHandler} id='firstName' name='firstName' />
                </div>
                <div>
                    {errorMessages.lastName ? <p>{errorMessages.lastName.message}</p> : null}
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" onChange={changeHandler} id='lastName' />
                </div>
                <div>
                    {errorMessages.email ? <p>{errorMessages.email.message}</p> : null}
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={changeHandler} id='email' />
                </div>
                <div>
                    {errorMessages.password ? <p>{errorMessages.password.message}</p> : null}
                    <label htmlFor="password"> Password</label>
                    <input type="password" onChange={changeHandler} id='password' />
                </div>
                <div>
                    {errorMessages.confirmPassword ? <p>{errorMessages.confirmPassword.message}</p> : null}
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" onChange={changeHandler} id='confirmPassword' />
                </div>
                <input type="submit" value="Register" />
            </form>

        </div>
    )
}

export default RegistrationForm