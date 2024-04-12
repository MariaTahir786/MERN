import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({ loggedInUser, setLoggedInUser }) => {
    const navigate = useNavigate()
    const [allUsers, setAllUsers] = useState([])
    const [errorMessages, setErrorMessages] = useState({})
    console.log("SAVE EXISTING USER IN DASH: ", loggedInUser)
    useEffect(() => {
        if (!loggedInUser || !loggedInUser._id) {
            navigate('/login')
        }
    }, [loggedInUser, navigate])



    const handleLogout = () => {
        axios.post('http://localhost:8000/api/users/logout', {}, { withCredentials: true })
            .then(res => {
                console.log(res)
                setLoggedInUser({})
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getAllUsers = () => {
        axios.get('http://localhost:8000/api/users', { withCredentials: true })
            .then(res => {
                console.log(res.data.users);
                setAllUsers(res.data.users);
            })
            .catch(err => {
                console.log(err.response.data)
                setErrorMessages(err.response.data)
            })
    }

    return (
        <div>
            <h1>Dashboard</h1>
            <button onClick={handleLogout}>logout</button>
            <h1>All Users</h1>
            <div>
                {errorMessages.message ? <p style={{ color: "red" }}> {errorMessages.message}</p> : null}
                <button onClick={getAllUsers}>users</button>
                <ul>
                    {
                        allUsers.map(user => (
                            <li key={user._id}>
                                {user.firstName} {user.lastName}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div >
    )
}

export default Dashboard
