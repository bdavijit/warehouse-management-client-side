import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./ProductCard.css"

const ProductCard = (props) => {
  
    const {_id, name, image , description, price } = props?.Product;

      const navigate = useNavigate();
      const showDetail = () => {
            navigate('/inventory/' + _id);
      };
    return (
          <div className='ProductCard animate__animated animate__zoomInUp'>
                <div>
                      <img className='My-img-fluid' src={image} alt='' />
                </div>
                <div>
                      <div className=''>
                            <h1
                                  className='text-center'
                                  style={{
                                        color: '#e03b8b',
                                  }}
                            >
                                  {name}
                            </h1>
                            <p className='text-center'>
                                  {description.length >= 150
                                        ? description.slice(0, 150) + '....'
                                        : description.slice(0, 150)}
                            </p>
                            <h3 className='text-center'>{price}</h3>
                            <button
                                  className='btn btn-Main-color w-100 mt-2'
                                  onClick={showDetail}
                            >
                                  update
                            </button>
                      </div>
                </div>
          </div>
    );
};

export default ProductCard;