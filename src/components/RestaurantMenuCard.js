import Shimmer from "./shimmer";
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
    <div className="menu-card">
      <h3>{name}</h3>
      <div className="Hotel-details">
        <div>
          <p>{cuisines.join(",")}</p>
          <p>{areaName}</p>
          <p>
            <b>{costForTwoMessage}</b>
          </p>
        </div>
        <div>
          <p>{avgRatingString}</p>

          <p>{totalRatingsString}</p>
        </div>
      </div>

      <div className="recomendations">
        <h3>Recomended</h3>
        <ul>
          {itemCards?.map((item) => (
            <li key={item.card.info.id} className="menu-item">
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
