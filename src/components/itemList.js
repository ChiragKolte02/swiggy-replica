import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartslice";

const ItemList = ({ items }) => {
  console.log(items);
const dispatch=useDispatch()
const handleAdditem=(item)=>{
  dispatch(addItem(item))
}

  return (
    <div>
      {items.map((item) => (
        <div key={item?.card?.info?.id} className="p-2 m-2 text-left border border-black border-b-2 flex">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+item?.card?.info?.imageId} className="w-24 h-28"></img>
            <div className="absolute">
             <button className="p-1  bg-black text-white shadow-lg  m-auto rounded-lg  active:bg-red-600 border border-solid border-black transform transition-transform duration-300 hover:scale-110"
             onClick={()=>handleAdditem(item)}>Add +</button>
            </div>
        <div>
          <div className="flex justify-between">
            <span className="font-semibold">{item?.card?.info?.name}</span>
            <span>₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</span>
          </div>
          <p className="text-xs text-gray-600">{item?.card?.info?.description}</p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
