import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import Login from '../Login/Login';

const Inventory = () => {
      const { user } = useFirebase();
      const navigate = useNavigate();

      const { Id } = useParams();
      // console.log(id);
      const [Products, set_Products] = useState({});
      useEffect(() => {
            const url = `http://localhost:5001/products/${Id}`;
            fetch(url)
                  .then((res) => res.json())
                  .then((data) => set_Products(data));
      }, []);

      const handelStock = (event) => {
            event.preventDefault();
            const num = event.target.num.value;
            event.target.reset();
            if (Products?.quantity > 0) {
                  set_Products((previousState) => {
                        return {
                              ...previousState,
                              quantity:
                                    parseInt(Products?.quantity) +
                                    parseInt(num),
                        };
                  });
            }
            // send data to the server
            const url = `http://localhost:5001/AddProduct/${Id}`;
            fetch(url, {
                  method: 'PUT',
                  headers: {
                        'content-type': 'application/json',
                  },
                  body: JSON.stringify({ ...Products, add: num }),
            })
                  .then((res) => res.json())
                  .then((data) => {
                        console.log('success', data);
                        alert('added');
                  });
      };

      const handelDelivered = () => {
            if (Products?.quantity > 0) {
                  set_Products((previousState) => {
                        return {
                              ...previousState,
                              quantity: Products?.quantity - 1,
                        };
                  });

                  // send data to the server
                  const url = `http://localhost:5001/Product/${Id}`;
                  fetch(url, {
                        method: 'PUT',
                        headers: {
                              'content-type': 'application/json',
                        },
                        body: JSON.stringify(Products),
                  })
                        .then((res) => res.json())
                        .then((data) => {
                              console.log('success', data);
                              alert('delivared');
                        });
            }
      };

      return (
            <div>
                  {user ? (
                        <>
                              <div className='text-center'>
                                    <img src={Products?.image} alt='ima' />
                                    <br></br>
                                    <Table
                                          striped
                                          bordered
                                          hover
                                          size='sm'
                                          style={{ fontSize: '1.4rem' }}
                                          className='w-75 mx-auto'
                                    >
                                          <thead>
                                                <tr>
                                                      <th>#</th>
                                                      <th>Title</th>
                                                      <th>Description</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                <tr>
                                                      <td>1</td>
                                                      <td>Name</td>
                                                      <td>{Products?.name}</td>
                                                </tr>
                                                <tr>
                                                      <td>2</td>
                                                      <td>Description</td>
                                                      <td>
                                                            {
                                                                  Products?.description
                                                            }
                                                      </td>
                                                </tr>
                                                <tr>
                                                      <td>3</td>
                                                      <td>Price</td>
                                                      <td>{Products?.price}</td>
                                                </tr>
                                                <tr>
                                                      <td>4</td>
                                                      <td>quantity</td>
                                                      <td>
                                                            {Products?.quantity}
                                                      </td>
                                                </tr>
                                                <tr>
                                                      <td>5</td>
                                                      <td>supplier_name</td>
                                                      <td>
                                                            {
                                                                  Products?.supplier_name
                                                            }
                                                      </td>
                                                </tr>
                                                <tr>
                                                      <td>6</td>
                                                      <td> sold</td>
                                                      <td>{Products?.sold}</td>
                                                </tr>
                                          </tbody>
                                    </Table>
                              </div>
                              <div
                                    style={{
                                          display: 'flex',
                                          justifyContent: 'center',
                                          flexDirection: 'column',
                                          alignItems: 'center',
                                          marginTop : "30px"
                                    }}
                              >
                                    <button
                                          className='btn btn-Main-color w-25'
                                          onClick={handelDelivered}
                                    >
                                          Delivered
                                    </button>
                                    <br />
                                    <form
                                          onSubmit={handelStock}
                                          style={{
                                                display: 'flex',
                                          }}
                                    >
                                          <input
                                                type='number'
                                                name='num'
                                                id=''
                                          />
                                          <button
                                                type='submit'
                                                className='btn btn-Main-color m-2 w-25'
                                          >
                                                Add
                                          </button>
                                    </form>
                                    <br />
                                    <button
                                          className='btn btn-Main-color w-25'
                                          onClick={() =>
                                                navigate('/ManageInventories')
                                          }
                                    >
                                          Manage Inventories
                                    </button>
                              </div>
                        </>
                  ) : (
                        <Login />
                  )}
            </div>
      );
};

export default Inventory;
