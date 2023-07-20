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
    <div className="res-card p-[5px] w-[280px] h-[340px] my-[10px] mx-[20px] bg-[rgb(250,250,250)] shadow-md hover:border-[1px]">
      <div className="image-box">
        <img
          className="food-image rounded-[5px]"
          src={`${CDN_URL}/${cloudinaryImageId}`}
          alt="image of  food"
        />
      </div>
      <div className="details mt-[5px] px-[5px]">
        <div className="food-description capitalize px-[2px] pt-[5px]">
          <h3>{name}</h3>
          <p className=" text-[0.9rem]">{cuisines.join(", ")}</p>
        </div>
        <div className="food-rating my-[10px] ml-[5px] text-[0.8rem]">
          <span className="my-[10px] mx-1">{avgRating} Stars</span>
          <span className="my-[10px] mx-1">{deliveryTime} Minutes</span>
          <span className="my-[10px] mx-1">₹{costForTwo / 100} FOR TWO</span>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;
