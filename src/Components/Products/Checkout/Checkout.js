import React from 'react';
 import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { ProductId } = useParams();
    return (
          <div>
                Chechout page
          </div>
    );
};

export default Checkout;