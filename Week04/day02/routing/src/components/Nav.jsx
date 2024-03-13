import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <div>
            <h2>Navigation</h2>
            {/* to is an href attribut react use */}
            <Link to={'/'}>Go to landing page</Link>
            <br />
            <Link to={'/home'}>Go to Home</Link>
            <br />
            <Link to={'/unicorn'}>Unicorn</Link>
            <br />
            <Link to={'/form'}>Go To Form</Link>


        </div>
    )
}

export default Nav