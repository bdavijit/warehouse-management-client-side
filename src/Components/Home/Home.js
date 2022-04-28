import React from 'react';
import useFirebase from '../../Hooks/useFirebase';

const Home = () => {

  const { user } = useFirebase();
    return (
        <div>
          <h1>Current User is : {user ? user.displayName : "Vooooot"}</h1>  
        </div>
    );
};

export default Home;