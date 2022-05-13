import React from 'react';
import useProducts from '../../Hooks/useProduct';
import ProductCard2 from '../ProductCard/ProductCard/ProductCard2';



import './ManageProduct.css';


const ManageInventories = () => {
      
            
                  const [Products, SetProducts] = useProducts(); 
                  return (
                        <>
                              <button>add new item</button>
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
