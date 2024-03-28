import React from 'react'
import {Link} from 'react-router-dom'


const Nav = () => {


  return (
    <nav className="d-flex justify-content-between align-items-center">
<h1>First Full Stack App</h1>
<div className="d-flex justify-content-around w-30">
{/* this for pipe|line &nbsp;|&nbsp; */}
    {/* <Link to='/'>Home</Link> &nbsp;|&nbsp;
    <Link to='books/create'>Create a new Book</Link> */}
    <ul className="nav nav-tabs">
      <li className="nav-item">
      <Link to='/' className="nav-link active">Home</Link> &nbsp;|&nbsp;
      </li>
      <li>
      <Link to='books/create' className="nav-link">Create a new Book</Link>
      </li>
    </ul>
</div>

    </nav>
  )
}

export default Nav