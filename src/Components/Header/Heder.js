import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Heder.css';

const Header = () => {

      const {user , handleSignOut} = useFirebase();
      // console.log(user);
    return (
          <div className='HeaderBox'>
                <nav>
                      <Link to='/'>Home</Link>
                      <Link to='/Product'>Product</Link>
                      <Link to='/Orders'>orders</Link>
                      <Link to='/Register'>Register</Link>
                      <span>{user?.displayName && user.displayName} </span>
                      {user?.uid ? (
                            <button onClick={handleSignOut}>sign out</button>
                      ) : (
                            <Link to='/login'>Login</Link>
                      )}
                </nav>
          </div>
    );
};

export default Header;