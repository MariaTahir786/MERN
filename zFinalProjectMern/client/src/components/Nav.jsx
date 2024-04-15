import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation();
    const isDisplayAllStores = location.pathname === '/';

    return (
        <nav className="d-flex justify-content-between align-items-center">
            <h1>Store Finder</h1>
            {!isDisplayAllStores && (
                <div className="d-flex justify-content-around w-30">
                    <Link to='/' className="nav-link active" style={{ color: 'blue', textDecoration: 'underline' }}>go back home</Link>
                </div>
            )}
        </nav>
    );
};

export default Nav;
