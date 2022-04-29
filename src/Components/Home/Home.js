import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import Login from '../Login/Login';

const Home = () => {

  const { user } = useFirebase();
    return (
        <div>
          {user 
          ?
           <h1>Current User is : {user ? user.displayName : "Vooooot"}</h1> 
           :
           <Login/>} 
        </div>
    );
};

export default Home;