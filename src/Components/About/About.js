import React from 'react';
import './About.css';

const About = () => {
      return (
            <div>
                  <div className='AboutBox'>
                        <div className='animate__animated animate__fadeInLeft'>
                              <img
                                    src='https://thumbs.dreamstime.com/b/vegetables-shopping-cart-trolley-grocery-logo-icon-design-vector-171090350.jpg'
                                    alt='mainLogo'
                                    className='My-img-fluid'
                              />
                        </div>
                        <div className='animate__animated animate__fadeInRight'>
                              <h1
                                    className='text-center'
                                    style={{ color: '#cc4717' }}
                              >
                                    GroceryHUB
                              </h1>
                              <p className='text-center'>
                                    The Grocery hub Kanishka Rd, A-Zone,
                                    Durgapur, West Bengal, india
                              </p>
                              <p className='text-center'>090640 92329</p>
                        </div>

                        <div className='animate__animated animate__fadeInLeft'>
                              <h1
                                    style={{ color: '#cc4717' }}
                                    className='text-center'
                              >
                                    Business Hours
                              </h1>
                              <p className='text-center mb-4'>
                                    Mon: Open 24 hours <br />
                                    Tue: Open 24 hours <br />
                                    Wed: Open 24 hours
                                    <br />
                                    Thu: Open 24 hours
                                    <br />
                                    Fri: Close
                                    <br />
                                    Sat: Open 24 hours
                                    <br />
                                    Sun: Open 24 hours
                              </p>
                              <h1
                                    style={{ color: '#cc4717' }}
                                    className='text-center'
                              >
                                    Contact
                              </h1>
                              <p className='text-center mb-4'>090640 92329</p>
                        </div>
                        <div className='animate__animated animate__fadeInRight'>
                              <img
                                    src='https://lh3.googleusercontent.com/p/AF1QipMpA9wQVdYrD0bhtJCO092aCWf3GrAw9Jd7zNfU=w1080-h608-p-no-v0'
                                    alt=''
                                    className='My-img-fluid'
                              />
                        </div>
                  </div>
            </div>
      );
};

export default About;
