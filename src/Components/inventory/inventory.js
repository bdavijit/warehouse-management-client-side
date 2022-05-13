import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import Login from '../Login/Login';

const Inventory = () => {
    const { user } = useFirebase();

    const { Id } = useParams();
    // console.log(id);
    const [Products, set_Products] = useState({});
    useEffect(() => {
          const url = `http://localhost:5001/products/${Id}`;
          fetch(url)
                .then((res) => res.json())
                .then((data) => set_Products(data));
    }, []);




         const handelDelivered = () =>{
               if (Products?.quantity > 0){
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
                                 alert('users added successfully!!!');
                           });
               }
         }

      return (
            <div>
                  {user ? (
                        <>
                              <div className='text-center'>
                                    <img src={Products?.image} alt='ima' />
                                    <br></br>
                                    <h1>Name : {Products?.name}</h1>
                                    <br></br>
                                    <h4>
                                          {`  description: 
                                          ${Products?.description}`}
                                    </h4>
                                    <br></br>
                                    <h4>
                                          {`  price: 
                                          ${Products?.price}`}
                                    </h4>
                                    <br></br>
                                    <h4>
                                          {`  quantity: 
                                          ${Products?.quantity}`}
                                    </h4>
                                    <br></br>
                                    <h4>
                                          {`  supplier_name: 
                                          ${Products?.supplier_name}`}
                                    </h4>
                                    <br></br>
                                    <h4>
                                          {`  sold: 
                                          ${Products?.sold}`}
                                    </h4>
                              </div>
                              <button className='btn' onClick={handelDelivered}>
                                    Delivered
                              </button>
                        </>
                  ) : (
                        <Login />
                  )}
            </div>
      );
};

export default Inventory;
