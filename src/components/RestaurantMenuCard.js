import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuCard from "../utils/useRestaurantMenuCard";

const RestaurantMenuCard = () => {
  const { id } = useParams();

  const resData = useRestaurantMenuCard(id);

  if (resData === null) return <Shimmer />;

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
  console.log(itemCards);
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

      <div className="recomendations mt-[40px]">
        <h3 className=" font-bold">Recomended</h3>
        <ul>
          {itemCards?.map((item) => (
            <li
              key={item.card.info.id}
              className="menu-item mt-[10px] mb-[20px] mx-0"
            >
              <h3> {item.card.info.name}</h3>
              <p>Rs{item.card.info.price / 100}.00</p>
              <p>{item.card.info.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenuCard;
