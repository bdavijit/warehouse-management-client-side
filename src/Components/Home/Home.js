import React from 'react';
// import useFirebase from '../../Hooks/useFirebase';
import Banner from '../Banner/Banner';
import Map from '../Map/Map';
import Products from '../Products/Product';

import "./Home.css"

const Home = () => {
      // const { user } = useFirebase();
      return (
            <div>
                  <Banner></Banner>
                  <h1
                        className='text-center'
                        style={{
                              color: '#e03b8b',
                              fontWeight: 'bold',
                        }}
                  >
                        Products
                  </h1>
                  <Products />
                  <Map />
            </div>
      );
};

export default Home;
