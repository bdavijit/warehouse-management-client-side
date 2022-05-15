import { useEffect, useState } from 'react';
import useFirebase from './useFirebase';

const useBlogs = () => {
      const [blogs, SetBlogs] = useState([]);
      const {loading, SetLoading } = useFirebase();

      useEffect(() => {
            SetLoading(true);
            
            const loadPosts = async () => {
                  let data = await fetch('https://intense-basin-16370.herokuapp.com/blogs');
                  let posts = await data.json();
                  SetBlogs(posts);
                  console.log(loading);
                  SetLoading(false);
            };
            loadPosts();
      }, []);

      return [blogs, SetBlogs];
};
export default useBlogs;
