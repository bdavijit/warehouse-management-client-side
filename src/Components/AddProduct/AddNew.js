import React from 'react';
//   name: updatedProduct.name,
//   image: updatedProduct.image,
//   description: updatedProduct.description,
//   price: updatedProduct.price,
//   quantity: updatedProduct.quantity - 1,
//   supplier_name: updatedProduct.supplier_name,
//   sold: updatedProduct.sold,

const AddNew = () => {
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
            <div>
                  <form onSubmit={AddItem}>
                        <input
                              type='text'
                              name='name'
                              id=''
                              placeholder='Name'
                        />
                        <br></br>
                        <input
                              type='text'
                              name='image'
                              id=''
                              placeholder='image'
                        />
                        <br></br>
                        <input
                              type='text'
                              name='description'
                              id=''
                              placeholder='description'
                        />
                        <br></br>
                        <input
                              type='number'
                              name='price'
                              id=''
                              placeholder='price'
                        />
                        <br></br>
                        <input
                              type='number'
                              name='quantity'
                              id=''
                              placeholder='quantity'
                        />
                        <br></br>
                        <input
                              type='text'
                              name='supplier_name'
                              id=''
                              placeholder='supplier_name'
                        />
                        <br></br>
                        <input
                              type='number'
                              name='sold'
                              id=''
                              placeholder='sold'
                        />
                        <br></br>
                        <button type='submit'>Add</button>
                  </form>
            </div>
      );
};

export default AddNew;
