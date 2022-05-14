import React from 'react';
import ban1 from '../../Image/banner/b1.jpg';
import ban2 from '../../Image/banner/b2.png';
import ban3 from '../../Image/banner/b3.jpg';

import "./Banner2.css"

const Banner2 = () => {
      return (
            <div className='BannerBox'>
                  <div
                        id='carouselExampleCaptions'
                        className='carousel slide'
                        data-bs-ride='carousel'
                  >
                        <div className='carousel-indicators'>
                              <button
                                    type='button'
                                    data-bs-target='#carouselExampleCaptions'
                                    data-bs-slide-to='0'
                                    className='active'
                                    aria-current='true'
                                    aria-label='Slide 1'
                              ></button>
                              <button
                                    type='button'
                                    data-bs-target='#carouselExampleCaptions'
                                    data-bs-slide-to='1'
                                    aria-label='Slide 2'
                              ></button>
                              <button
                                    type='button'
                                    data-bs-target='#carouselExampleCaptions'
                                    data-bs-slide-to='2'
                                    aria-label='Slide 3'
                              ></button>
                        </div>
                        <div className='carousel-inner'>
                              <div className='carousel-item active'>
                                    <img
                                          src='https://www.sfbl.com.bd/uploaded_files/Basic-Spice-790x434-pix.jpg'
                                          className='d-block w-100'
                                          alt='...'
                                    />
                                    <div className='carousel-caption d-none d-md-block'>
                                          <h5></h5>
                                          <p></p>
                                    </div>
                              </div>
                              <div className='carousel-item'>
                                    <img
                                          src='https://www.sfbl.com.bd/uploaded_files/Kala-Bhuna-790x434-pix-(2021).jpg'
                                          className='d-block w-100'
                                          alt='...'
                                    />
                                    <div className='carousel-caption d-none d-md-block'>
                                          <h5></h5>
                                          <p></p>
                                    </div>
                              </div>
                              <div className='carousel-item'>
                                    <img
                                          src='https://www.sfbl.com.bd/uploaded_files/Mustard%20Oil%20WEB%20%20790%20X%20434-01.jpg'
                                          className='d-block w-100'
                                          alt='...'
                                    />
                                    <div className='carousel-caption d-none d-md-block text-dark'>
                                          <h5></h5>
                                          <p></p>
                                    </div>
                              </div>
                        </div>
                        <button
                              className='carousel-control-prev'
                              type='button'
                              data-bs-target='#carouselExampleCaptions'
                              data-bs-slide='prev'
                        >
                              <span
                                    className='carousel-control-prev-icon'
                                    aria-hidden='true'
                              ></span>
                              <span className='visually-hidden'>Previous</span>
                        </button>
                        <button
                              className='carousel-control-next'
                              type='button'
                              data-bs-target='#carouselExampleCaptions'
                              data-bs-slide='next'
                        >
                              <span
                                    className='carousel-control-next-icon'
                                    aria-hidden='true'
                              ></span>
                              <span className='visually-hidden'>Next</span>
                        </button>
                  </div>
            </div>
      );
};

export default Banner2;
