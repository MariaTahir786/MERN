import React, { useState } from 'react'

const FormTwo = () => {
    // getter         setter
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm_pass: ''
    });

    const handleNewUser = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }


    const createNewUser = e => {
        e.preventDefault();
        console.log(e)
        setNewUser({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirm_pass: ''
        })
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={createNewUser}>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" onChange={handleNewUser} value={newUser.firstName} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" onChange={handleNewUser} value={newUser.lastName} />
                </div>
                <div>
                    <label htmlFor="email">Email Address: </label>
                    <input type="email" name="email" onChange={handleNewUser} value={newUser.email} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" onChange={handleNewUser} value={newUser.password} />
                </div>
                <div>
                    <label htmlFor="confirm_pass">Confirm Password: </label>
                    <input type="password" name="confirm_pass" onChange={handleNewUser} value={newUser.confirm_pass} />
                </div>
                <button>Create</button>
            </form>
            {/* <input type="submit" value="" /> */}
            {/* <button type='submit'></button> */}
            <div>
                <h1>Welcome, {newUser.firstName} {newUser.lastName}</h1>
                <h2>Email: {newUser.email}</h2>
            </div>
        </div>
    )
}

export default FormTwo