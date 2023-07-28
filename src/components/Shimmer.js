import React from "react";

export const Shimmer = () => {
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

export const MenuShimmer = () => {
  return (
    <div className="menu-card w-[60vw]  my-[25px] mx-auto  bg-[rgb(255,255,255)] ">
      <h3 className="block w-36 h-3 bg-[#bdbdbd6e] mb-[25px] mt-[10px] mx-3"></h3>
      <div className="Hotel-details flex justify-between mt-[10px]">
        <div>
          <p className=" block w-28 h-3 bg-[#bdbdbd6e] mb-[25px] mt-[10px] mx-3"></p>
          <p className="block w-28 h-3 bg-[#bdbdbd6e] mb-[25px] mt-[10px] mx-3"></p>
          <p className="block w-28 h-3 bg-[#bdbdbd6e] mb-[25px] mt-[10px] mx-3">
            <b></b>
          </p>
        </div>
        <div>
          <p className="block w-28 h-3 bg-[#bdbdbd6e] mb-[25px] mt-[10px] mx-3"></p>

          <p className="block w-28 h-3 bg-[#bdbdbd6e] mb-[25px] mt-[10px] mx-3"></p>
        </div>
      </div>

      <div className="recomendations pb-16 ">
        <h3 className=" font-bold block w-56 h-3 bg-[#bdbdbd6e] mb-[25px] mt-[10px] mx-5"></h3>
        <br />
        <ul>
          <li className="menu-item mt-[10px] mb-[20px] mx-0">
            <h3 className="block w-[90%] h-3 bg-[#bdbdbd6e] mb-[25px] mt-[10px] mx-5"></h3>
            <p className="block w-[90%] h-3 bg-[#bdbdbd6e] mb-[25px] mt-[10px] mx-5"></p>
            <p className="block w-[90%] h-3 bg-[#bdbdbd6e] mb-[25px] mt-[10px] mx-5"></p>
          </li>
          <br />
          <li className="menu-item mt-[10px] mb-[20px] mx-0">
            <h3 className="block w-[90%] h-3 bg-[#bdbdbd6e] mb-[25px] mt-[10px] mx-5"></h3>
            <p className="block w-[90%] h-3 bg-[#bdbdbd6e] mb-[25px] mt-[10px] mx-5"></p>
            <p className="block w-[90%] h-3 bg-[#bdbdbd6e] mb-[25px] mt-[10px] mx-5"></p>
          </li>
        </ul>
      </div>
    </div>
  );
};
