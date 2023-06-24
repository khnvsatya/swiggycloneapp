import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenuCard = () => {
  const [resData, setResData] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchMenuCards();
  }, []);

  const fetchMenuCards = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4694638&lng=78.5543734&restaurantId=${id}&submitAction=ENTER`
    );
    const json = await data.json();
    // console.log(json);
    setResData(json);
  };

  if (resData === null) return <Shimmer />;

  const {
    name,
    areaName,
    avgRatingString,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
  } = resData?.data?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
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
