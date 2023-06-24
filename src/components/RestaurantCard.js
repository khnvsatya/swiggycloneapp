import React from "react";
import { CDN_URL } from "../utils/constant";

const ResturantCard = ({ resInfo }) => {
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    cloudinaryImageId,
    id,
  } = resInfo?.data;
  return (
    <div className="res-card">
      <div className="image-box">
        <img
          className="food-image"
          src={`${CDN_URL}/${cloudinaryImageId}`}
          alt="image of  food"
        />
      </div>
      <div className="details">
        <div className="food-description">
          <h3>{name}</h3>
          <p>{cuisines.join(" , ")}</p>
        </div>
        <div className="food-rating">
          <span>{avgRating} Stars</span>
          <span>{deliveryTime} Minutes</span>
          <span>₹{costForTwo / 100} FOR TWO</span>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;
