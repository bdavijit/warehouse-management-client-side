import React from 'react';

const Map = () => {
    return (
          <section>
                <h1
                      className='text-center mt-5 main-color mb-lg-5'
                      style={{
                            color: '#cc4717',
                            fontWeight: 'bold',
                      }}
                >
                      Our Location
                </h1>
                <iframe
                      title='Location'
                      className='container d-flex justify-content-center w-100'
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1872339.066951258!2d85.36597006322168!3d23.571595200000015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f76d068547dcc1%3A0xa5a2be199649c533!2sThe%20Grocery%20hub!5e0!3m2!1sbn!2sbd!4v1652352271147!5m2!1sbn!2sbd'
                      width='600'
                      height='450'
                      allowfullscreen=''
                      loading='lazy'
                ></iframe>
          </section>
    );
};

export default Map;