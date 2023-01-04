import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/books-view'>Show Books</Link>
                <Link className='nav-link' to='/add-book'>Add Books</Link>
            </nav>
        </div>
    );
};

export default Navbar;