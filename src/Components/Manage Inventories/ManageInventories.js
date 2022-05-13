import React from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../Hooks/useProduct';
import ProductCard2 from '../ProductCard/ProductCard/ProductCard2';



import './ManageProduct.css';


const ManageInventories = () => {
      
            const navigate = useNavigate();
      
                  const [Products, SetProducts] = useProducts(); 
                  return (
                        <>
                              <button
                                    className='btn btn-primary'
                                    onClick={() =>
                                          navigate('/Add_new')
                                    }
                              >
                                    add new item
                              </button>
                              {/* <h1>This is product page</h1> */}
                              <div className='ProductBox mt-3'>
                                    {Products?.map((Product) => (
                                          <ProductCard2
                                                key={Product.id}
                                                Product={Product}
                                          ></ProductCard2>
                                    ))}
                              </div>
                        </>
                  );
            
   
};

export default ManageInventories;
