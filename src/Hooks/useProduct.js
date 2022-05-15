import { useEffect, useState } from 'react';
import useFirebase from './useFirebase';

const useProducts = () => {
      const [products, setProducts] = useState([]);
      const { SetLoading } = useFirebase();

      useEffect(() => {
            SetLoading(true);
            fetch('http://localhost:5001/products')
                  .then((res) => res.json())
                  .then((data) => {
                        console.log(data);
                        setProducts(data);
                        SetLoading(false);
                  });
      }, []);

      return [products, setProducts];
};
export default useProducts;
