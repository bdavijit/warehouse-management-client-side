import React from 'react';
import ban1 from '../../Image/banner/b1.jpg';
import ban2 from '../../Image/banner/b2.png';
import ban3 from '../../Image/banner/b3.jpg';

const Banner2 = () => {
      return (
            <div>
                  <div
                        id='carouselExampleCaptions'
                        class='carousel slide'
                        data-bs-ride='carousel'
                  >
                        <div class='carousel-indicators'>
                              <button
                                    type='button'
                                    data-bs-target='#carouselExampleCaptions'
                                    data-bs-slide-to='0'
                                    class='active'
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
                        <div class='carousel-inner'>
                              <div class='carousel-item active'>
                                    <img
                                          src={ban1}
                                          class='d-block w-100'
                                          alt='...'
                                       
                                    />
                                    <div class='carousel-caption d-none d-md-block'>
                                          <h5></h5>
                                          <p>
                                              
                                          </p>
                                    </div>
                              </div>
                              <div class='carousel-item'>
                                    <img
                                          src={ban2}
                                          class='d-block w-100'
                                          alt='...'
                                    />
                                    <div class='carousel-caption d-none d-md-block'>
                                          <h5></h5>
                                          <p>
                                          
                                          </p>
                                    </div>
                              </div>
                              <div class='carousel-item'>
                                    <img
                                          src={ban3}
                                          class='d-block w-100'
                                          alt='...'
                                    />
                                    <div class='carousel-caption d-none d-md-block text-dark'>
                                          <h5></h5>
                                          <p>
                                             
                                          </p>
                                    </div>
                              </div>
                        </div>
                        <button
                              class='carousel-control-prev'
                              type='button'
                              data-bs-target='#carouselExampleCaptions'
                              data-bs-slide='prev'
                        >
                              <span
                                    class='carousel-control-prev-icon'
                                    aria-hidden='true'
                              ></span>
                              <span class='visually-hidden'>Previous</span>
                        </button>
                        <button
                              class='carousel-control-next'
                              type='button'
                              data-bs-target='#carouselExampleCaptions'
                              data-bs-slide='next'
                        >
                              <span
                                    class='carousel-control-next-icon'
                                    aria-hidden='true'
                              ></span>
                              <span class='visually-hidden'>Next</span>
                        </button>
                  </div>
            </div>
      );
};

export default Banner2;
