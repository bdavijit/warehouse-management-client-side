import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
// import Login from '../Login/Login';
import mainLogo from '../../Image/banner.jpg';
import "./Home.css"

const Home = () => {
      const { user } = useFirebase();
      return (
            <div>
                  <h1>
                        Current User is : {user ? user.displayName : 'Vooooot'}
                  </h1>

                  <section className='Banner-Box'>
                        <div>
                              <img
                                    src={mainLogo}
                                    alt='mainlogo'
                                    className='My-img-fluid'
                              />
                        </div>
                        <div>
                              <h1 className='text-center'>Welcome To <br/> IQBAL's Cuisine</h1>
                        </div>
                  </section>
            </div>
      );
};

export default Home;
