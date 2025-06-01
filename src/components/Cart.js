import { useDispatch, useSelector } from "react-redux"
import ItemList from "./itemList"
import { clearCart } from "../utils/cartslice"

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items)
    const dispatch=useDispatch()
    const handleClearCart = () => {
  dispatch(clearCart());
};
    return (
    
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="w-6/12 m-auto">
            <button className="p-2 m-2 bg-black text-white rounded-lg  active:bg-red-600 border border-solid border-black transform transition-transform duration-300 hover:scale-110"
            onClick={handleClearCart}>Clear Cart</button>
        <ItemList items={cartItems}/>
        </div>
    </div>)
}
export default Cart