import { useEffect, useState } from "react";
import useFirebase from "./useFirebase";

const useBlogs = () => {
  const [blogs, SetBlogs] = useState([]);
  const { SetLoading } = useFirebase();

  useEffect(() => {
    SetLoading(true);
    fetch('http://localhost:5001/blogs')
          .then((res) => res.json())
          .then((data) => {
                console.log(data);
                SetBlogs(data);
                SetLoading(false);
          });
  }, []);

  return [blogs, SetBlogs];
};
export default useBlogs;
