import React from 'react'
import logo from './brba_logo.png'
import './Navbar.css'

function Navbar({val,handleChange}) {
    return (
        <div className='navbar'>
            <img src={logo} alt="logo"/>
            <input type="search" placeholder='Search' value={val} onChange={handleChange}/>
        </div>
    )
}

export default Navbar
