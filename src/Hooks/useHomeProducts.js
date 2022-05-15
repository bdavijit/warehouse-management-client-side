import { useEffect, useState } from 'react';
import useFirebase from './useFirebase';

const useHomeProducts = () => {
      const [HomeProducts, setHomeProducts] = useState([]);
      const { SetLoading } = useFirebase();

      useEffect(() => {
            SetLoading(true);
            fetch('https://intense-basin-16370.herokuapp.com/6products')
                  .then((res) => res.json())
                  .then((data) => {
                        console.log(data);
                        setHomeProducts(data);
                        SetLoading(false);
                  });
      }, []);

      return [HomeProducts, setHomeProducts];
};
export default useHomeProducts;
