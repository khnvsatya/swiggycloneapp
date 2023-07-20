import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-card p-[5px] w-[280px] h-[340px] m-[10px] bg-[rgb(250,250,250)] shadow-md">
      <div className="shimmer-image w-[270px] h-[171px] bg-[#bdbdbd6e] rounded-[5px]"></div>
      <div className="shimmer-rating  mt-4 ">
        <span className=" block w-full h-3 bg-[#bdbdbd6e] mb-[25px] mt-[10px]"></span>
        <span className=" block w-full h-3 bg-[#bdbdbd6e] mb-[25px] mt-[10px]"></span>
        <span className=" block w-full h-3 bg-[#bdbdbd6e] mb-[25px] mt-[10px]"></span>
      </div>
    </div>
  );
};

export default Shimmer;
