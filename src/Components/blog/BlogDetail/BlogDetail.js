import React from "react";
import { useParams } from "react-router-dom";
import data from "../../../data/blogs.json";
import Map from "../../Map/Map";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { blogId } = useParams();
  console.log(data);
  console.log(data[blogId - 1].image);

  return (
        <>
              <section className='blogDetails  animate__animated animate__bounceInUp'>
                    <div className='d-flex justify-content-center'>
                          <img
                                className='My-img-fluid '
                                src={data[blogId - 1].image}
                                alt=''
                          />
                    </div>
                    <br></br>
                    <div>
                          <h1 className='title-Text m-5 text-center'>
                                {data[blogId - 1].title}
                          </h1>
                          <p>{data[blogId - 1].detail}</p>
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
