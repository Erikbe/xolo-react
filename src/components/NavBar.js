import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Nav from './Nav'
import Sidebar from './Sidebar'

const NavBar = () => {
    const [onClick, setClick] = useState(false);
    const handleClick = () => setClick(!onClick);

    return (
        <>
            <Helmet>
                <body className={onClick ? 'm-sidebar' : ''} />
            </Helmet>
            <div className='grid'>
                <div className='header-logo-container'>
                    <h1 className='header-logo'>
                        <Link to='/' className='header-logo-link'>Xolo</Link>
                    </h1>
                </div>
                <div className='header-nav-container'>
                    <Nav />
                    <button className={onClick ? 'nav-button-burger active' : 'nav-button-burger'} aria-label='Toggle side menu' aria-pressed='false' onClick={handleClick}>
                        <span></span><span></span><span></span>
                    </button>
                </div>
                {onClick ? <Sidebar /> : null}
            </div>
        </>
    );
}

export default NavBar;