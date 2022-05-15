import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Map from "../../Map/Map";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { blogId } = useParams();
  const [blogs, SetBlogs] = useState([]);

  useEffect(() => {
        fetch('https://intense-basin-16370.herokuapp.com/blogs')
              .then((res) => res.json())
              .then((data) => {
                    console.log(data);
                    SetBlogs(data);
              });
  }, []);

  return (
        <>
              <section className='blogDetails  animate__animated animate__bounceInUp'>
                    <div className='d-flex justify-content-center'>
                          <img
                                className='My-img-fluid '
                                src={blogs[blogId - 1]?.image}
                                alt=''
                          />
                    </div>
                    <br></br>
                    <div>
                          <h1 className='title-Text m-5 text-center'>
                                {blogs[blogId - 1]?.title}
                          </h1>
                          <p>{blogs[blogId - 1]?.detail}</p>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
              </section>
              <Map />
        </>
  );
};

export default BlogDetail;
