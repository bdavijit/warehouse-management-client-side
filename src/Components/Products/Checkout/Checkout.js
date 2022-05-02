import React from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import data from '../../../data/products.json';
import useFirebase from '../../../Hooks/useFirebase';
import Login from '../../Login/Login';
import './Checkout.css';

const Checkout = () => {
      const { ProductId } = useParams();
      console.log(data);
      console.log(ProductId);
      const { user } = useFirebase();
      return (
            <div>
                  {user ? (
                        <>
                              <h1
                                    className='text-center'
                                    style={{ color: '#E03B8B' }}
                              >
                                    Checkout
                              </h1>
                              <h2
                                    className='text-center mt-4'
                                    style={{ color: '#E03B8B' }}
                              >
                                    Selected product
                              </h2>
                              <section className='CheckoutProductBox'>
                                    <div>
                                          <img
                                                className='My-img-fluid'
                                                src={data[ProductId - 1]?.image}
                                                alt=''
                                          />
                                    </div>
                                    <div>
                                          <h1 className='text-center'>
                                                {data[ProductId - 1].name}
                                          </h1>
                                          <p className='text-center'>
                                                {data[ProductId - 1].detail}
                                          </p>
                                    </div>
                              </section>

                              <h2
                                    className='text-center '
                                    style={{ color: '#E03B8B' }}
                              >
                                    Customer Details
                              </h2>
                              <form className='w-75 PaymentBox'>
                                    <div>
                                          <input
                                                type='text'
                                                placeholder='Name'
                                                id='input1'
                                                required
                                          />
                                          <br></br>
                                          <br></br>
                                          <textarea
                                                id='input2'
                                                name='w3review'
                                                placeholder='Address'
                                                rows='4'
                                                cols='50'
                                          ></textarea>
                                          <br></br>
                                          <br></br>
                                    </div>
                                    <h3 className='text-center'>Payment</h3>
                                    <section>
                                          <Form>
                                                {['radio'].map((type) => (
                                                      <div
                                                            key={`inline-${type}`}
                                                            className='mb-3'
                                                      >
                                                            <Form.Check
                                                                  inline
                                                                  label='Bkash'
                                                                  name='group1'
                                                                  type={type}
                                                                  id={`inline-${type}-1`}
                                                            />
                                                            <Form.Check
                                                                  inline
                                                                  label='Nagod'
                                                                  name='group1'
                                                                  type={type}
                                                                  id={`inline-${type}-2`}
                                                            />

                                                            <Form.Check
                                                                  inline
                                                                  label='Card'
                                                                  name='group1'
                                                                  type={type}
                                                                  id={`inline-${type}-3`}
                                                            />
                                                      </div>
                                                ))}
                                          </Form>
                                    </section>
                                    <br></br>
                                    <button
                                          type='submit'
                                          className='btn btn-Main-color w-100'
                                    >
                                          {' '}
                                          Checkout
                                    </button>

                                    <br></br>
                              </form>
                        </>
                  ) : (
                        <Login />
                  )}
            </div>
      );
};

export default Checkout;
