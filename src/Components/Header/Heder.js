import React from 'react';
import { Link } from 'react-router-dom';
import './Heder.css';

const Header = () => {
    return (
          <div className='HeaderBox'>
                <nav>
                      <Link to='/'>Home</Link>
                      <Link to='/Product'>Product</Link>
                      <Link to='/Orders'>orders</Link>
                      <Link to='/Register'>Register</Link>
                      <Link to='/Login'>Login</Link>
                </nav>
          </div>
    );
};

export default Header;