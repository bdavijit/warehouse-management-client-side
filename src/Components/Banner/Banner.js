import React from 'react';
import mainLogo from '../../Image/banner3.png';
import "./Banner.css"

const Banner = () => {
    return (
          <div>
                <section className='Banner-Box'>
                      <div>
                            <img
                                  src={mainLogo}
                                  alt='mainlogo'
                                  className='My-img-fluid'
                            />
                      </div>
                      <div>
                            <h1 className='text-center'>
                                  Welcome To <br /> IQBAL's Cuisine
                            </h1>
                      </div>
                </section>
          </div>
    );
};

export default Banner;