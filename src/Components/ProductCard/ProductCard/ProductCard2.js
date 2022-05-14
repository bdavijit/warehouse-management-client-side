import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';
import './ProductCard2.css';

const ProductCard2 = (props) => {
      const { _id, name, image, description, price, supplier_name } =
            props?.Product;
      const { user } = useFirebase();

      const navigate = useNavigate();
      const showDetail = () => {
            navigate('/inventory/' + _id);
      };

      const DeleteProduct = (id) => {
            const proceed = window.confirm('Are you sure you want to delete?');
            if (proceed) {
                  const url = `http://localhost:5001/Product/${id}`;
                  fetch(url, {
                        method: 'DELETE',
                  })
                        .then((res) => res.json())
                        .then((data) => {
                              if (data.deletedCount > 0) {
                                    const remaining = props.Products.filter(
                                          (product) => product._id !== id
                                    );
                                    props.SetProducts(remaining);
                              }
                              alert("ok")
                        });
            }
      };

      return (
            <>
                  {user && user?.displayName === supplier_name ? (
                        <div className='ProductCard animate__animated animate__flipInX'>
                              <div>
                                    <img
                                          className='My-img-fluid'
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
                                                      ? description?.slice(
                                                              0,
                                                              150
                                                        ) + '....'
                                                      : description?.slice(
                                                              0,
                                                              150
                                                        )}
                                          </p>
                                          <h3 className='text-center'>
                                                {price}
                                          </h3>
                                          <p className='text-center'>
                                                Added by:{' '}
                                                <span
                                                      style={{
                                                            color: '#cc4717',
                                                      }}
                                                >
                                                      {' '}
                                                      {user?.displayName
                                                            ? user?.displayName
                                                            : 'No Data Found'}
                                                </span>
                                          </p>
                                          <div className='buttonBOx'>
                                                <button
                                                      className='btn btn-Main-color w-100 mt-2'
                                                      onClick={showDetail}
                                                >
                                                      update
                                                </button>
                                                <button
                                                      className='btn btn-danger w-100 mt-2'
                                                      onClick={() =>
                                                            DeleteProduct(_id)
                                                      }
                                                >
                                                      Delete
                                                </button>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  ) : (
                        ' '
                  )}
            </>
      );
};

export default ProductCard2;
