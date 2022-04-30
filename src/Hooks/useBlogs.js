import { useEffect, useState } from "react";

const useBlogs = () => {
  const [blogs, SetBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        SetBlogs(data);
      });
  }, []);

  return [blogs, SetBlogs];
};
export default useBlogs;
