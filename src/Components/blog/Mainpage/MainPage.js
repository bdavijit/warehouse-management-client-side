import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import "./style.css";
import "./activebtn.css";
import useBlogs from "../../../Hooks/useBlogs";
import { activeBTn } from "../../../Utility/ActiveBtn";

const MainPage = () => {
  const [DisplayBlog, SetDisplayBlog] = useState([]);
  const [blogs, SetBlogs] = useBlogs();

  let start = 0;


  useEffect(() => {
    SetDisplayBlog(blogs?.slice(0, 3));
  }, [blogs]);

  const setBtn = (BtnsID, index) => {
    if (index === 1) {
      start = index - 1;
    } else {
      start = 3 * index - 3;
    }

    SetDisplayBlog(blogs.slice(start, start + 3));
    console.log(start, DisplayBlog);
    if (start > blogs.length - 1) {
      alert("No result Found");
      // setBtn('myDIV', 1);
    }

    activeBTn(BtnsID, index - 1);
  };



  return (
        <>
              <section className='BlogBox'>
                    <br></br>
                    {DisplayBlog.map((blog) => (
                          <BlogCard key={blog.id} blog={blog} />
                    ))}
              </section>
              <br></br>
              <br></br>
              <section id='myDIV' className='d-flex justify-content-center '>
                    <button
                          className='btn active'
                          onClick={() => setBtn('myDIV', 1)}
                    >
                          1
                    </button>
                    <button className='btn' onClick={() => setBtn('myDIV', 2)}>
                          2
                    </button>
                    <button className='btn' onClick={() => setBtn('myDIV', 3)}>
                          3
                    </button>
                    <button className='btn' onClick={() => setBtn('myDIV', 4)}>
                          4
                    </button>
                    <button className='btn' onClick={() => setBtn('myDIV', 5)}>
                          5
                    </button>

                    <br></br>
                    <br></br>
              </section>
        </>
  );
};

export default MainPage;
