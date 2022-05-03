import React from "react";
import mainLogo from '../../Image/banner4.webp';
import "./About.css";

const About = () => {
  return (
        <div>
              <div className='AboutBox'>
                    <div className='animate__animated animate__fadeInLeft'>
                          <img
                                src={mainLogo}
                                alt='mainLogo'
                                className='My-img-fluid'
                          />
                    </div>
                    <div className='animate__animated animate__fadeInRight'>
                          <h1
                                className='text-center'
                                style={{ color: '#E03B8B' }}
                          >
                                Iqbal Mahmud
                          </h1>
                          <p className='text-center'>bdIqbal07@gmail.com</p>
                          <p className='text-center'>01674566999</p>
                    </div>

                    <div className='animate__animated animate__fadeInLeft'>
                          <h1
                                style={{ color: '#E03B8B' }}
                                className='text-center'
                          >
                                Goal
                          </h1>
                          <p className='text-center'>
                                I want to be a web developer, especially for
                                Home jobs / Businesses ( related to websites)
                          </p>
                          <h1
                                style={{ color: '#E03B8B' }}
                                className='text-center'
                          >
                                Vision
                          </h1>
                          <p>
                                To help elevate the lifestyle and living of
                                people in general with our Innovations,
                                Creations and Business Practices
                          </p>
                          <h1
                                style={{ color: '#E03B8B' }}
                                className='text-center'
                          >
                                Mission
                          </h1>
                          <p>
                                To stay contemporary and contextual being
                                innovative and cutting-edge
                          </p>
                    </div>
                    <div className='animate__animated animate__fadeInRight'>
                          <img
                                src='https://hatil.com/sites/default/files/About%20us%2002%2B%2B_1.png'
                                alt=''
                                className='My-img-fluid'
                          />
                    </div>
              </div>
        </div>
  );
};

export default About;
