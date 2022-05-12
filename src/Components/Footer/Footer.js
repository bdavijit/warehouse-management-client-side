import React from 'react';
import "./Footer.css"

const Footer = () => {
let Year = new Date().getFullYear();
    
      return (
            <>
                  <footer className='FooterBox'>
                        <h1>
                              <span className='Title-Color'>Grocery</span>{' '}
                              HUB
                        </h1>
                        <p>copyright © {Year}</p>
                  </footer>
            </>
      );
};

export default Footer;
