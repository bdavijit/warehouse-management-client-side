import React from 'react';

const Map = () => {
    return (
          <section>
                <h1
                      class='text-center mt-5 main-color mb-lg-5'
                      style={{
                            color: '#e03b8b',
                            fontWeight: 'bold',
                      }}
                >
                      Our Location
                </h1>
                <iframe
                      title='Location'
                      className='container d-flex justify-content-center w-100'
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d774.8094542925149!2d89.00159269223576!3d24.423171564513446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc115f1ec7e8f3%3A0x2626270e23f2f5c3!2sBangladesh%20Television%20Epicenter%2C%20Natore!5e0!3m2!1sbn!2sbd!4v1651476352427!5m2!1sbn!2sbd'
                      width='600'
                      height='450'
                      allowfullscreen=''
                      loading='lazy'
                ></iframe>
          </section>
    );
};

export default Map;