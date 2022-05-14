import React from 'react';
import useFirebase from '../../Hooks/useFirebase';
import Login from '../Login/Login';
import './AddNew.css'
//   name: updatedProduct.name,
//   image: updatedProduct.image,
//   description: updatedProduct.description,
//   price: updatedProduct.price,
//   quantity: updatedProduct.quantity - 1,
//   supplier_name: updatedProduct.supplier_name,
//   sold: updatedProduct.sold,

const AddNew = () => {

      const { user } = useFirebase();

      const AddItem = (event) => {
            alert('ok');

            event.preventDefault();
            const name = event.target.name.value;
            const image = event.target.image.value;
            const description = event.target.description.value;
            const price = event.target.price.value;
            const quantity = event.target.quantity.value;
            const supplier_name = event.target.supplier_name.value;
            const sold = event.target.sold.value;
          

            const product = {
                  name,
                  image,
                  description,
                  price,
                  quantity,
                  supplier_name,
                  sold,
            };

                    fetch('http://localhost:5001/Product', {
                          method: 'POST',
                          headers: {
                                'content-type': 'application/json',
                          },
                          body: JSON.stringify(product),
                    })
                          .then((res) => res.json())
                          .then((data) => {
                                // console.log('success', data);
                                alert('Product added successfully!!!');
                                event.target.reset();
                          });
      };
      return (
            <>
                  {user ? (
                        <div className='AddNewBox'>
                              <h1 className='mb-3 text-center'>
                                    <span style={{ color: '#cc4717' }}>
                                          Add New Product
                                    </span>
                              </h1>
                              <form className='AddNew-Form' onSubmit={AddItem}>
                                    <input
                                          type='text'
                                          name='name'
                                          id=''
                                          placeholder='Name'
                                          required
                                    />
                                    <br></br>
                                    <br></br>
                                    <input
                                          type='text'
                                          name='image'
                                          id=''
                                          placeholder='Image'
                                          required
                                    />
                                    <br></br>
                                    <br></br>
                                    <input
                                          type='text'
                                          name='description'
                                          id=''
                                          placeholder='Description'
                                    />
                                    <br></br>
                                    <br></br>
                                    <input
                                          type='number'
                                          name='price'
                                          id=''
                                          placeholder='Price'
                                          required
                                    />
                                    <br></br>
                                    <br></br>
                                    <input
                                          type='number'
                                          name='quantity'
                                          id=''
                                          placeholder='Quantity'
                                          required
                                    />
                                    <br></br>
                                    <br></br>
                                    <input
                                          type='text'
                                          name='supplier_name'
                                          value={user?.displayName}
                                          placeholder='supplier name'
                                          required
                                          disabled
                                    />
                                    <br></br>
                                    <br></br>
                                    <input
                                          type='number'
                                          name='sold'
                                          id=''
                                          placeholder='Sold'
                                          required
                                    />
                                    <br></br>
                                    <br></br>
                                    <button
                                          className='btn btn-Main-color w-75 mx-auto'
                                          type='submit'
                                    >
                                          Add
                                    </button>
                              </form>
                        </div>
                  ) : (
                        <Login />
                  )}
            </>
      );
};

export default AddNew;
