import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategeory = ({ data, showItems, setShowIndex }) => {
  //   console.log(data);

  const handleCardVisibility = () => {
    setShowIndex();
  };

  return (
    <div className="recomendations mt-[40px]">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleCardVisibility}
      >
        <h3 className=" font-bold">
          {data.title}({data.itemCards.length})
        </h3>
        <span className=" text-xl ">{showItems ? "^" : "⌄"}</span>
      </div>
      {showItems && <ItemList itemCards={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategeory;
