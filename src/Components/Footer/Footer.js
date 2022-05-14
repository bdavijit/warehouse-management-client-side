import React from 'react';
import './Footer.css';

const Footer = () => {
      let Year = new Date().getFullYear();

      return (
            <>
                  <footer className='FooterBox'>
                        <div>
                              {' '}
                              <h1 className='text-center'>
                                    <span className='Title-Color'>Grocery</span>
                                    HUB
                              </h1>
                              <p className='text-center'>
                                    The Grocery hub Kanishka Rd, A-Zone,
                                    Durgapur, West Bengal, india
                              </p>
                              <p className='text-center'>copyright © {Year}</p>
                        </div>
                        <div>
                              <h1 className='text-center'>
                                    <span className='Title-Color'>Social</span>
                                    Links
                              </h1>
                              <div className='text-center'>
                                    <a
                                          href='https://apps.apple.com/in/app/flipkart/id742044692'
                                          className='fs-6'
                                    >
                                          <i
                                                className='fa-brands fa-facebook'
                                                style={{
                                                      color: ' #3b5998',
                                                      fontSize: '25px',
                                                      marginLeft: '10px',
                                                }}
                                          ></i>
                                    </a>
                                    <a
                                          href='https://apps.apple.com/in/app/flipkart/id742044692'
                                          className='fs-6'
                                    >
                                          <i
                                                className='fa-brands fa-youtube'
                                                style={{
                                                      color: '#FF0000',
                                                      fontSize: '25px',
                                                      marginLeft: '10px',
                                                }}
                                          ></i>
                                    </a>
                                    <a
                                          href='https://apps.apple.com/in/app/flipkart/id742044692'
                                          className='fs-6'
                                    >
                                          <i
                                                className='fa-brands fa-twitter'
                                                style={{
                                                      color: ' #00acee',
                                                      fontSize: '25px',
                                                      marginLeft: '10px',
                                                }}
                                          ></i>
                                    </a>
                              </div>
                        </div>
                  </footer>
            </>
      );
};

export default Footer;
