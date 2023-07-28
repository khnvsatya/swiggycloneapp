import React from "react";
import { Shimmer } from "./Shimmer";

const ShimmerContainer = () => {
  return (
    <div className="w-full h-full">
      <div className="shimmer-container flex flex-wrap gap-[10px] max-w-screen-xl mx-auto my-[80px] align-middle shadow-sm">
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
