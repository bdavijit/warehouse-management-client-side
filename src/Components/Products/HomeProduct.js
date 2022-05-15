import React from 'react';
import useHomeProducts from '../../Hooks/useHomeProducts';
import "./Product.css";
import ProductCard from './ProductCard/ProductCard';


const HomeProduct = () => {
      const [HomeProducts, SetHomeProducts] = useHomeProducts();

    return (
          <>
                {/* <h1>This is product page</h1> */}
                <div className='ProductBox mt-3'>
                      {HomeProducts?.map((Product) => (
                            <ProductCard
                                  key={Product._id}
                                  Product={Product}
                            ></ProductCard>
                      ))}
                </div>
          </>
    );
};

export default HomeProduct;

