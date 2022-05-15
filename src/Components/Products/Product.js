import React from 'react';
import { Spinner } from 'react-bootstrap';
import useFirebase from '../../Hooks/useFirebase';
import useProducts from '../../Hooks/useProduct';
import './Product.css';
import ProductCard from './ProductCard/ProductCard';

const Products = () => {
      const [Products, SetProducts] = useProducts();
      const { loading } = useFirebase();
      return (
            <>
                  {loading ? (
                        <Spinner animation='border' variant='danger' />
                  ) : (
                        ''
                  )}
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
