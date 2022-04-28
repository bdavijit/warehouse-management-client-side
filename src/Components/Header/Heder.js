import React from 'react';
import { Link } from 'react-router-dom';
import './Heder.css';

const Header = () => {
    return (
          <div className='HeaderBox'>
                <nav>
                      <Link to='/'>Home</Link>
                      <Link to='/Login'>Login</Link>
                </nav>
          </div>
    );
};

export default Header;