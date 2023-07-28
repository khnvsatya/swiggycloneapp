import { useState } from "react";
import { MenuShimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuCard from "../utils/useRestaurantMenuCard";
import ItemList from "./ItemList";
import RestaurantCategeory from "./RestaurantCategeory";

const RestaurantMenuCard = () => {
  const { id } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const resData = useRestaurantMenuCard(id);
  // console.log(resData);

  if (resData === null) return <MenuShimmer />;

  const {
    name,
    areaName,
    avgRatingString,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
  } = resData?.data?.cards[0]?.card?.card?.info;

  const { itemCards } = resData?.data?.cards[2]?.groupedCard?.cardGroupMap
    ?.REGULAR?.cards[1]?.card?.card
    ? resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card
    : resData?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
        ?.card?.card;

  // console.log(itemCards);

  const categeories =
    resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) => {
        return (
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  console.log(categeories);

  return (
    <div className="menu-card w-[60vw] my-[25px] mx-auto">
      <h3 className="font-bold text-lg">{name}</h3>
      <div className="Hotel-details flex justify-between mt-[10px]">
        <div>
          <p className=" text-sm">{cuisines.join(",")}</p>
          <p className=" text-sm">{areaName}</p>
          <p>
            <b>{costForTwoMessage}</b>
          </p>
        </div>
        <div>
          <p>{avgRatingString}</p>

          <p>{totalRatingsString}</p>
        </div>
      </div>

      {categeories.map((categeory, index) => (
        <>
          <RestaurantCategeory
            key={categeory?.card?.card.title}
            data={categeory?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() =>
              setShowIndex((prev) => (prev === index ? null : index))
            }
          />
          <hr className="h-4 w-full bg-gray-100 mt-2 mb-3 border-0" />
        </>
      ))}

      {/* <ItemList itemCards={itemCards} /> */}
    </div>
  );
};

export default RestaurantMenuCard;
