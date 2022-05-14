import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = (props) => {
  const { id, title, detail, image } = props?.blog;

  const navigate = useNavigate();
  const showBlogDetail = () => {
    navigate("/blog/" + id);
    window.scrollTo(0, 0);

  };
  return (
        <>
              {id % 2 != 0 ? (
                    <div className='BlogCard animate__animated animate__fadeInRight'>
                          <div className='Display-center flex-item '>
                                <img
                                      className='My-img-fluid'
                                      src={image}
                                      alt=''
                                />
                          </div>

                          <div className='BlogCard-Body flex-item'>
                                <h1 className='title-Text'>{title}</h1>
                                <p className='p-Text'>
                                      {detail.length >= 50
                                            ? detail.slice(0, 150) + '....'
                                            : detail.slice(0, 150)}
                                </p>
                                <button
                                      className='w-75'
                                      onClick={showBlogDetail}
                                >
                                      Detail
                                </button>
                          </div>
                    </div>
              ) : (
                    <div className='BlogCard animate__animated animate__fadeInLeft'>
                          <div className='BlogCard-Body flex-item  BlogCard-left'>
                                <h1 className='title-Text'>{title}</h1>
                                <p className='p-Text'>
                                      {detail.length >= 50
                                            ? detail.slice(0, 150) + '....'
                                            : detail.slice(0, 150)}
                                </p>
                                <button
                                      className='w-75'
                                      onClick={showBlogDetail}
                                >
                                      Detail
                                </button>
                          </div>
                          <div className='Display-center flex-item BlogCard-right'>
                                <img
                                      className='My-img-fluid'
                                      src={image}
                                      alt=''
                                />
                          </div>
                    </div>
              )}
        </>
  );
};

export default BlogCard;
