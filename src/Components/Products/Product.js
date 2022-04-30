import React, { useEffect, useState } from 'react';
import useProducts from '../../Hooks/useProduct';
import ProductCard from './ProductCard/ProductCard';
import "./Product.css"


const Products = () => {
      const [Products, SetProducts] = useProducts();

    return (
          <>
                {/* <h1>This is product page</h1> */}
                <div className='ProductBox mt-3'>
                      {Products?.map((Product) => (
                            <ProductCard
                                  key={Product.id}
                                  Product={Product}
                    
                            ></ProductCard>
                      ))}
                </div>
          </>
    );
};

export default Products;