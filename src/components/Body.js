import React, { useState, useEffect } from "react";
import ResturantCard from "./RestaurantCard";
import ShimmerContainer from "./ShimmerContainer";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";
import { ResturantCardWithPromoted } from "./RestaurantCard";
import { DATA_URL } from "../utils/constant";

const Body = () => {
  const navigate = useNavigate();
  const [listOfRes, setListofRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const WithPromotedCard = ResturantCardWithPromoted(ResturantCard);

  const handleSearch = () => {
    const fil = (isFilter ? filteredRes : listOfRes).filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredRes(fil);
    setSearchText("");
  };

  const handleTopRatedResList = (value) => {
    const filteredList = listOfRes?.filter(
      (res) => res?.info?.avgRating > value
    );

    setIsFilter(true);
    setFilteredRes(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(DATA_URL);
      const json = await data.json();

      setListofRes(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRes(
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  if (onlineStatus == false) {
    return <h1>it's look like you are Offline, check your connection</h1>;
  }

  if (listOfRes?.length === 0) {
    return <ShimmerContainer />;
  }
  if (filteredRes?.length === 0) {
    navigate("/error");
  }
  return (
    <div className="main-body bg-opacity-50 ">
      <div className="filter-box flex py-[5px] px-[20px] mr-[10px] align-middle justify-between">
        <div>
          <button
            className="filter-btn p-[5px] border-2 rounded-full ml-[12px] bg-slate-100 "
            onClick={() => {
              handleTopRatedResList(4);
            }}
          >
            Ratings 4.0+
          </button>
          <button
            className="filter-btn p-[5px] border-2 rounded-full ml-[12px]  bg-slate-100 "
            onClick={() => {
              handleTopRatedResList(4.5);
            }}
          >
            Ratings 4.5+
          </button>
          {isFilter && (
            <button
              className="clear-btn p-[5px] border-2 rounded-full ml-[12px]"
              onClick={() => {
                setIsFilter(!isFilter);
                setFilteredRes(listOfRes);
              }}
            >
              Clear Filter
            </button>
          )}
        </div>
        <div className="search p-[10px]">
          <input
            className=" text-left p-[5px] border-2 rounded-lt-[25px] rounded-l-[25px] focus:outline-0"
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button
            className="p-[5px] rounded-r-[25px] rounded-br-[25px] border-2"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      <div className="h-full w-full">
        <div className="res-Container max-w-screen-xl m-auto flex flex-wrap align-middle">
          {filteredRes?.map((res) => (
            <Link
              to={"/restaurant/" + (res?.data?.id | res?.info?.id)}
              key={res?.data?.id | res?.info?.id}
            >
              {res?.data?.promoted ? (
                <WithPromotedCard resInfo={res.info} />
              ) : (
                <ResturantCard resInfo={res.info} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
