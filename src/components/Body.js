import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabl } from "./RestaurantCard";
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted= withPromotedLabl(RestaurantCard)

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5775893&lng=73.9418603&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(json)
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      console.log(restaurants)
      setAllRestaurants(restaurants);   
      setFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };
  const onlineStatus= useOnlineStatus();
  if(onlineStatus===false)  return <h1>Look like you are offline plase check your internet</h1>

  useEffect(() => {
    fetchData();
  }, []);

  if (allRestaurants?.length === 0) {
    return <Shimmer />;
  }

  const handleTopRatedFilter = () => {
    const topRated = allRestaurants?.filter(
      (res) => res.info?.avgRating > 4.5
    );
    setFilteredRestaurants(topRated);
  };

  const handleSearch = () => {
    const searched = allRestaurants?.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(searched);
  };


  return (
    <div className="">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            className="search-box border border-solid border-black "
            type="text"
            placeholder="Search  restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn px-4 bg-lime-50 m-4 rounded-lg active:bg-red-600 border border-solid border-black transform transition-transform duration-300 hover:scale-110" onClick={handleSearch}>
            Search
          </button>
        </div>
      <div className="flex items-center ">
        <button className=" px-4 py-2 bg-blue-50 flex items-center rounded-lg active:bg-red-600 border border-solid border-black transform transition-transform duration-300 hover:scale-110" onClick={handleTopRatedFilter}>
          Top Rated Restaurants
        </button>
        </div>
      </div>

      <div className="res-container flex flex-wrap">
        {filteredRestaurants?.map((restaurant) => (
         <Link 
         key={restaurant?.info?.id}
         to={"/restaurants/"+ restaurant?.info?.id}> 
         { restaurant?.info?.avgRating > 4.5 ? (<RestaurantCardPromoted resData={restaurant}/>)
         :(<RestaurantCard  resData={restaurant} />)
         }
         </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
