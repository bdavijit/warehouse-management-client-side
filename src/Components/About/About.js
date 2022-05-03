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
                                Avijit Kundu
                          </h1>
                          <p className='text-center'>bdavijit01@gmail.com</p>
                          <p className='text-center'>01674566999999</p>
                    </div>

                    <div className='animate__animated animate__fadeInLeft'>
                          <h1
                                style={{ color: '#E03B8B' }}
                                className='text-center'
                          >
                                Goal
                          </h1>
                          <p className='text-center mb-4'>
                                I want to be a web developer, especially for
                                Home jobs / Businesses ( related to websites)
                          </p>
                          <h1
                                style={{ color: '#E03B8B' }}
                                className='text-center'
                          >
                                How I will work hard to achieve my goal.
                          </h1>
                          <p>
                                1. I design 10 project plans, I will finish
                                these projects in 2 months. 2. Every day I will
                                visit to at least three website 3. Time
                                management is the biggest challenge for me. I
                                should manage more effective time. 4. More
                                practice.
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
