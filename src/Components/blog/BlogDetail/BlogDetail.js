import React from "react";
import { useParams } from "react-router-dom";
import data from "../../../data/blogs.json";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { blogId } = useParams();
  console.log(data);
  console.log(data[blogId - 1].image);

  return (
    <>
      <section className="blogDetails">
        <div>
          <img className="My-img-fluid" src={data[blogId - 1].image} alt="" />
        </div>
        <br></br>
        <div>
          <h1 className="title-Text m-5">{data[blogId - 1].title}</h1>
          <p>{data[blogId - 1].detail}</p>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </section>
    </>
  );
};

export default BlogDetail;
