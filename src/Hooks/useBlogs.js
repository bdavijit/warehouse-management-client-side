import { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, SetBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/blogs')
          .then((res) => res.json())
          .then((data) => {
                console.log(data);
                SetBlogs(data);
          });
  }, []);

  return [blogs, SetBlogs];
};
export default useBlogs;
