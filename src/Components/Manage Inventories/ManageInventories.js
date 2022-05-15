import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import useProducts from '../../Hooks/useProduct';
import Login from '../Login/Login';
import ProductCard2 from '../ProductCard/ProductCard/ProductCard2';

import './ManageProduct.css';

const ManageInventories = () => {
      const navigate = useNavigate();

      const [Products, SetProducts] = useProducts();
      const { user } = useFirebase();

      const { loading } = useFirebase();

      return (
            <>
                  {loading ? (
                        <Spinner animation='border' variant='danger' />
                  ) : (
                        ''
                  )}

                  {user ? (
                        <>
                              <div
                                    style={{
                                          display: 'flex',
                                          justifyContent: 'center',
                                    }}
                              >
                                    <button
                                          className='btn btn-Main-color mt-4'
                                          onClick={() => navigate('/Add_new')}
                                    >
                                          Add New Item
                                    </button>
                              </div>

                              {/* <h1>This is product page</h1> */}
                              <div className='ProductBox mt-3'>
                                    {Products?.map((Product) => (
                                          <ProductCard2
                                                key={Product._id}
                                                Products={Products}
                                                Product={Product}
                                                SetProducts={SetProducts}
                                          ></ProductCard2>
                                    ))}
                              </div>
                        </>
                  ) : (
                        <Login />
                  )}
            </>
      );
};

export default ManageInventories;
