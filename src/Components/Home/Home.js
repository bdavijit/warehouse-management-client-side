import React from 'react';
// import useFirebase from '../../Hooks/useFirebase';
import Banner from '../Banner/Banner';
import Products from '../Products/Product';

import "./Home.css"

const Home = () => {
      // const { user } = useFirebase();
      return (
            <div>

                  <Banner></Banner>
                  <h1 className='text-center'>Products</h1>
                  <Products/>
                  
                  
            </div>
      );
};

export default Home;
