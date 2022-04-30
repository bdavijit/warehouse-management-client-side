import React from "react";
import "../Home/Home.css";

const ReviewCard2 = ({ image, Username, rate, comment }) => {
  console.log("jhgjhg");
  return (
    <>
      <div className="ReviewCard">
        <div>
          <img src={image} alt={Username} className="My-img-fluid" />
        </div>
        <div>
          <h4 style={{ color: "#2827CC" }}>{Username}</h4>
          <p>{comment}</p>
          <p>Rating: {rate}</p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard2;
