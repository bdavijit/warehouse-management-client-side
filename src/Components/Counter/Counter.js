import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {

const [ TProduct ,setTProduct] = useState(20);
const [T_customer, setT_customer] = useState(100);

  

      // const myInterval = setInterval(myTimer, 500);

      // function myTimer() {
      

      //             if (TProduct >= 20 && T_customer >= 100) {
      //                   clearInterval(myInterval);
      //             }else{
      //                   console.log("ok");
      //                         setTProduct(TProduct + 2);
      //                         setT_customer(T_customer + 10);
      //             }


      // }

      // function myStop() {
      //       clearInterval(myInterval);
      // }




      return (
            <div className='CounterBox'>
                  <div className='text-center'>
                        <h1>{T_customer}</h1>
                        <h3>Total Customer</h3>
                  </div>
                  <div className='text-center'>
                        <h1>{TProduct}</h1>
                        <h3>Total Product</h3>
                  </div>
            </div>
      );
};

export default Counter;
