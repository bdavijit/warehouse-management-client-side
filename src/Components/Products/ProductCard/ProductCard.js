import React from 'react';
import useFirebase from '../../../Hooks/useFirebase';
import "./ProductCard.css"

const ProductCard = (props) => {
     
  
    const { name, image , description, price } = props?.Product;


    return (
          <div className='MYProductCard animate__animated animate__fadeInUp'>
                <div className=''>
                      <img
                            className='My-img-fluid imageBorder'
                            src={image}
                            alt=''
                      />
                </div>
                <div>
                      <div className=''>
                            <h1
                                  className='text-center'
                                  style={{
                                        color: '#cc4717',
                                  }}
                            >
                                  {name}
                            </h1>
                            <p className='text-center'>
                                  {description?.length >= 150
                                        ? description?.slice(0, 150) + '....'
                                        : description?.slice(0, 150)}
                            </p>
                            <h3 className='text-center'>{price}</h3>
                      </div>
                </div>
          </div>
    );
};

export default ProductCard;