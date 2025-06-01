import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatorgoty from "./ResCatogory";

const ResMenu = () => {
  
  // const [resMenu, setResMenu] = useState(null);
  const {resId}= useParams()
  const resInfo = useRestaurantMenu(resId)
  console.log(resId)
  const [showIndex,setshowIndex]=useState(0);

 
  if (resInfo ==null) {
    return <Shimmer />;
  }
    const { name, cuisines, avgRating } = resInfo?.cards[2]?.card?.card?.info;
    
  
  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  // console.log( resInfo?.cards[4])
  const allCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const categories = allCards?.filter(
  (c) =>
    c.card?.card?.["@type"] ===
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
    // console.log(categories)

  return (
    <div className="text-center">
      <h1 className="font-bold my-7 text-2xl">{name}</h1>
      <h2 className="font-semibold text-lg ">{cuisines.join(", ")}</h2>
      <h3 className="font-extrabold text-lg">{avgRating} Stars</h3>
      {/* <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name}-{"    Rs"}:{item.card.info.price/100}</li>
        ))}
      </ul> */}
      {categories.map((category,index)=>{
        return <RestaurantCatorgoty key={category?.card?.card.title}
         data={category?.card?.card}
         showitems={ index==showIndex? true: false}
         setshowIndex={()=> setshowIndex(index)}
         />
      })}
    </div>
  );
};

export default ResMenu;

 // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   try {
  //     const data = await fetch(MENU_URL + resId);
  //     const json = await data.json();
  //     const restaurantList = json.data?.cards[2]?.card?.card;
  //     const menu = json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  //     setResInfo(restaurantList);
  //     setResMenu(menu);
  //   } catch (error) {
  //     console.error("Error fetching menu:", error);
  //   }
  // };
  