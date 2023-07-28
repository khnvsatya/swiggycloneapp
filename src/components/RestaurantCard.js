import React from "react";
import { CDN_URL } from "../utils/constant";

const ResturantCard = ({ resInfo }) => {
  // console.log(resInfo);
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    id,
    sla: { deliveryTime },
  } = resInfo;
  return (
    <div className="relative res-card p-[5px] w-[280px] h-[340px] my-[10px] mx-[20px] bg-[rgb(250,250,250)] shadow-md hover:border-[1px]">
      <div className="image-box">
        <img
          className="food-image rounded-[5px]"
          src={`${CDN_URL}/${cloudinaryImageId}`}
          alt="image of  food"
        />
      </div>
      <div className="details mt-[5px] px-[5px] ">
        <div className="food-description capitalize px-[2px] pt-[5px]">
          <h3 className=" font-bold ">{name}</h3>
          <p className=" text-[0.9rem] mt-1 pl-1">
            {`${cuisines?.join(", ").slice(0, 35)}${
              cuisines?.join(", ").length > 35 ? "..." : ""
            }`}
          </p>
        </div>
        <div className="food-rating absolute bottom-8 text-[0.8rem]">
          <span className="my-[10px] mx-1">{avgRating} Stars</span>
          <span className="my-[10px] mx-1">{deliveryTime} Minutes</span>
          <span className="my-[10px] mx-1">{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default ResturantCard;

export const ResturantCardWithPromoted = (ResturantCard) => {
  return ({ resInfo }) => {
    return (
      <div className="relative">
        <span className=" absolute bg-black text-white rounded top-2 left-7 p-1 shadow-lg">
          Promoted
        </span>
        <ResturantCard resInfo={resInfo} />
      </div>
    );
  };
};
