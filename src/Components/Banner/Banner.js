import React from 'react';
import mainLogo from '../../Image/banner4.webp';
import "./Banner.css"

const Banner = () => {
    return (
          <div>
                <section className='Banner-Box'>
                      <div className='animate__animated animate__fadeInLeft'>
                            <img
                                  src={mainLogo}
                                  alt='mainlogo'
                                  className='My-img-fluid'
                            />
                      </div>
                      <div className='animate__animated animate__fadeInRight'>
                            <h1 className='text-center'>
                                  Welcome To <br />{' '}
                                  <span style={{ color: '#e03b8b' }}>
                                        Grocery
                                  </span>{' '}
                                  HUB
                            </h1>
                      </div>
                </section>
          </div>
    );
};

export default Banner;