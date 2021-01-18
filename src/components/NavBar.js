import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'

function NavBar() {
    return (
        <div className='grid'>
            <div className='header-logo-container'>
                <h1 className='header-logo'>
                    <Link to='/' className='header-logo-link'>Xolo</Link>
                </h1>
            </div>
            <div className='header-nav-container'>
                <Nav />
                <button className='nav-button-burger' aria-label='Toggle side menu' aria-pressed='false'>
                    <span></span><span></span><span></span>
                </button>
            </div>
            <div className='sidebar'></div>
        </div>
    );
}

export default NavBar;