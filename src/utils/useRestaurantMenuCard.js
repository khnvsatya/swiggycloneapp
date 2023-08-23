import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenuCard = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenuCards(id);
  }, []);

  async function fetchMenuCards(id) {
    const data = await fetch(MENU_URL + id);
    const json = await data.json();
    setResInfo(json);
  }

  return resInfo;
};

export default useRestaurantMenuCard;
