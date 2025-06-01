import { useState } from "react"
import ItemList from "./itemList"
const RestaurantCatorgoty=({data,showitems,setshowIndex})=>{
    console.log(data)
   const handelClick=()=>{
    setshowIndex();
    
   }
   
    return <div>
        <div className="w-6/12 m-auto my-4   bg-gray-50 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer"onClick={handelClick}>
        <span className="font-bold">{data.title}({data.itemCards.length})</span>
         <span>⬇️</span>
         </div>
        {showitems && <ItemList items={data.itemCards}/>}
        </div>
        
    </div>
}
export default RestaurantCatorgoty