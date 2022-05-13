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
    
         const handelStock = (event) =>{
               event.preventDefault();
               const num = event.target.num.value;
               event.target.reset();
               if (Products?.quantity > 0) {
                     set_Products((previousState) => {
                           return {
                                 ...previousState,
                                 quantity: parseInt(Products?.quantity) + parseInt(num),
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
                     body: JSON.stringify({...Products , add: num}),
               })
                     .then((res) => res.json())
                     .then((data) => {
                           console.log('success', data);
                           alert('added');
                     });
         }


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
                                 alert('delivared');
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
                              <form onSubmit={handelStock}>
                                    <input type="number" name="num" id="" />
                                    <button type="submit">Add</button>
                              </form>
                        </>
                  ) : (
                        <Login />
                  )}
            </div>
      );
};

export default Inventory;