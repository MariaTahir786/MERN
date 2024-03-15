import React from 'react'
import {Link}from 'react-router-dom'
const Nav = () => {
    return (
        <div>
            <h1>Nav Bar</h1>
            <div>
                <Link to={'/'} >Go To Home</Link>
                <br />
                <Link to={'/people'}>Go To People</Link>
            </div>
        </div>
    )
}

export default Nav