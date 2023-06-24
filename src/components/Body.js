import React, { useState, useEffect } from "react";
import ResturantCard from "./RestaurantCard";
import ShimmerContainer from "./ShimmerContainer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRes, setListofRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [isFilter, setIsFilter] = useState(false);
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    const fil = (isFilter ? filteredRes : listOfRes).filter((res) =>
      res.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(listOfRes, fil);
    setFilteredRes(fil);
    setSearchText("");
  };

  const handleTopRatedResList = () => {
    const filteredList = filteredRes.filter((res) => res.data.avgRating > 4);
    setIsFilter(true);
    setFilteredRes(filteredList);

    // console.log("non ui exicution", filter);
  };

  useEffect(() => {
    fetchData();
    console.log("useeffect");
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setListofRes(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRes(json?.data?.cards[2]?.data?.data?.cards);
  };

  if (filteredRes?.length === 0) {
    return <ShimmerContainer />;
  }
  return (
    <div className="main-body">
      <div className="filter-box">
        <div>
          <button className="filter-btn" onClick={handleTopRatedResList}>
            Top rated Restaurants
          </button>
          {isFilter && (
            <button
              className="clear-btn"
              onClick={() => {
                setIsFilter(!isFilter);
                setFilteredRes(listOfRes);
              }}
            >
              Clear Filter
            </button>
          )}
        </div>
        <div className="search">
          <input
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div className="res-Container">
        {console.log(listOfRes)}
        {filteredRes?.map((res) => (
          <Link to={"/restaurant/" + res.data.id} key={res.data.id}>
            <ResturantCard resInfo={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
