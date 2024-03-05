import React, { useState } from 'react'

const FormAndHooks = () => {
    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confPassword, setConfPassword] = useState('')

    const handleFName = (e) => {
        console.log(e.target.value)
        setFName(e.target.value)
    }

    const handleLName = (e) => {
        console.log(e.target.value)
        setLName(e.target.value)
    }

    const handleEmail = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    const handleConfPassword = (e) => {
        console.log(e.target.value)
        setConfPassword(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    {
                      fName.length<2 && fName.length!==0?
                      <p style={{"color":"red"}}>Name Must be at least two characters</p> 
                    :null
                }
                    <label htmlFor="firstName">First Name  </label>
                    <input type="text" name="firstName" id="" onChange={handleFName} />
                </div>
                <div>
                    {
                        lName.length<2 &&lName.length!==0?
                        <p style={{"color":"red"}}>Name Must be at least two characters</p>:null
                    }
                    <label htmlFor="lastName">Last Name  </label>
                    <input type="text" name="lastName" id="" onChange={handleLName} />
                </div>
                <div>
                {
                        email.length<5 &&email.length!==0?
                        <p style={{"color":"red"}}>Email Must be at least 5 characters</p>:null
                    }
                    <label htmlFor="email">Email  </label>
                    <input type="email" name="email" id="" onChange={handleEmail} />
                </div>
                <div>
                {
                 password.length<8 && password.length!==0?<p style={{"color":"red"}}>Password must be at least 8 characters long</p> :null  
                }
                    <label htmlFor="password">Password  </label>
                    <input type="password" name="password" id="" onChange={handlePassword} />
                </div>
                <div>
                    {
                      confPassword!==password && confPassword.length!==0? <p style={{"color":"red"}}>Passwords must match</p> :null
                    }
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="" onChange={handleConfPassword} />
                </div>
                <button type="submit">Submit Form</button>
            </form>
            <h2>First Name: {fName}</h2>
            <h2>Last Name:  {lName}</h2>
            <h2>Email:   {email}</h2>
            <h2>Password:   {password}</h2>
            <h2>Confirm Password;  {confPassword}</h2>

        </div>
    )
}

export default FormAndHooks