import { useEffect, useState } from 'react';

const useHomeProducts = () => {
      const [HomeProducts, setHomeProducts] = useState([]);

      useEffect(() => {
            fetch('http://localhost:5001/6products')
                  .then((res) => res.json())
                  .then((data) => {
                        console.log(data);
                        setHomeProducts(data);
                  });
      }, []);

      return [HomeProducts, setHomeProducts];
};
export default useHomeProducts;
