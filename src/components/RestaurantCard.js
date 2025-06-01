
const RestaurantCard=(props)=>

    {
        const {resData}=props
        const { name, avgRating, cuisines=[],costForTwo } = resData?.info || {};
        const deliveryTime=resData?.info?.sla?.deliveryTime
        const imageid = resData?.info?.cloudinaryImageId;
        return(
            <div className="res-card m-4 p-4 w-[200px] bg-gray-100 rounded-lg hover:bg-orange-300 h-[460px] transform transition-transform duration-300 hover:scale-105">
                 <img className=" rounded-lg" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageid}`} 
                           alt="Restaurant Image"/>
                <h3 className="font-bold py-4 text-lg">{name}</h3>
                <h5>{cuisines.join(", ")}</h5>
                <h5>Ratings:{avgRating}Stars</h5>
                <h5>Cost={costForTwo}</h5>
                <h5>deliveryTime:{deliveryTime}mins</h5>
            </div>
        )
    }

 export const withPromotedLabl=(RestaurantCard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute z-10 bg-black text-white m-2 p-2 rounded-lg">Well Rated</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;