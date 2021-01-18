import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className='nav'>
            <ul className='nav-list nav-list-links'>
                <li className='nav-item'>
                    <Link to='/how-it-works' className='nav-item-link'>How it works</Link>
                </li>

                <li className='nav-item'>
                    <Link to='/' className='nav-item-link'>Our solutions</Link>
                </li>

                <li className='nav-item '>
                    <Link to='/pricing' className='nav-item-link'>Pricing</Link>
                </li>

                <li className='nav-item '>
                    <Link to='/' className='nav-item-link'>Help</Link>
                </li>
            </ul>

            <ul className='nav-list nav-list-buttons'>
                <li className='nav-item'>
                    <Link to='/login' className='btn btn-transparent'>Log in</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/signup' className='btn btn-red'>Sign up free</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;