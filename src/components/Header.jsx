import { LOGO_URL } from "../utils/constants";
import { useState,useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";


const Header= ()=>{
  
    // const [bteName,setbtnName]=useState("Login");
      const onlineStatus= useOnlineStatus();
      console.log(onlineStatus)
      const {loggedInUser}=useContext(userContext)
      const cartItems=useSelector((store)=>store.cart.items)
      console.log(cartItems)
    const isAuthenticatedUser=useSelector((store)=>store.user.isAuthenticated)
    const user = useSelector((store)=>store.user.user);
    console.log("User is: " + user)
    const dispatch=useDispatch()
    const handelLogout=()=>{
        dispatch(logout())
    }

    return (<div className="flex justify-between bg-pink-100 shadow-lg m-2">
        <div className="logo-container">
            <img className="w-36" src={LOGO_URL}/>
        </div>
    
        <div className="flex items-center">
            <ul className="flex p-4 m-4 ">
                <li className="px-4  transform transition-transform duration-300 hover:scale-110">
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4 transform transition-transform duration-300 hover:scale-110">
                    <Link to="/about">About us</Link>
                </li>
                <li className="px-4 transform transition-transform duration-300 hover:scale-110">
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li className="px-4 transform transition-transform duration-300 hover:scale-110">
                    <Link to="/contact">Contact Us</Link>
        
                </li>
                <li className="px-4 font-bold text-xl transform transition-transform duration-300 hover:scale-110">
                    <Link to="/cart">Cart: {cartItems.length} items</Link></li>
                {isAuthenticatedUser?(<li className="px-4">Welcome Chirag!!</li>):(<li></li>)}
               
                <li className="px-4 transform transition-transform duration-300 hover:scale-110">
                    {isAuthenticatedUser?(<Link to="/login"onClick={handelLogout}>Logout</Link>):
                     (<Link to="/login">LogIn</Link>)}
                </li>
            </ul>
        </div>
    </div>)
}
export default Header;