import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
// import useFirebase from '../../Hooks/useFirebase';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner/Banner2';
import Counter from '../Counter/Counter';
import Map from '../Map/Map';
import HomeProduct from '../Products/HomeProduct';
import './Home.css';

const Home = () => {
      const navigate = useNavigate();
      const { loading } = useFirebase();
      // const { user } = useFirebase();
      return (
            <div>
                  {loading ? (
                        <Spinner animation='border' variant='danger' />
                  ) : (
                        ''
                  )}
                  <Banner2></Banner2>

                  <br></br>
                  <br></br>
                  <Counter />
                  <h1
                        className='text-center mt-4'
                        style={{
                              color: '#cc4717',
                              fontWeight: 'bold',
                        }}
                  >
                        Products
                  </h1>

                  <HomeProduct />
                  <div
                        style={{
                              display: 'flex',
                              justifyContent: 'center',
                        }}
                  >
                        <button
                              className='btn btn-Main-color mt-4'
                              onClick={() => navigate('/ManageInventories')}
                        >
                              Manage Inventories
                        </button>
                  </div>
                  <Map />
            </div>
      );
};

export default Home;
