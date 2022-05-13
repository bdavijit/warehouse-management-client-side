import React from 'react';
import { useNavigate } from 'react-router-dom';
// import useFirebase from '../../Hooks/useFirebase';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import Map from '../Map/Map';
import HomeProduct from '../Products/HomeProduct';
import "./Home.css";



const Home = () => {
            const navigate = useNavigate();
      
      // const { user } = useFirebase();
      return (
            <div>
                  <Banner></Banner>
                  <Counter />
                  <h1
                        className='text-center mt-4'
                        style={{
                              color: '#e03b8b',
                              fontWeight: 'bold',
                        }}
                  >
                        Products
                  </h1>

                  <HomeProduct />
                  <button
                        className='btn btn-primary'
                        onClick={() => navigate('/ManageInventories')}
                  >
                        Manage Inventories
                  </button>
                  <Map />
            </div>
      );
};

export default Home;
