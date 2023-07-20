import React from "react";
import Shimmer from "./Shimmer";

const ShimmerContainer = () => {
  return (
    <div className="w-full h-full">
    <div className="shimmer-container flex flex-wrap gap-[10px] mx-auto my-[80px] w-[90%] align-middle shadow-sm">
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
      <Shimmer />
    </div>
    </div>
  );
};

export default ShimmerContainer;
