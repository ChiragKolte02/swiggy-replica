import { createContext } from "react";
import { useSelector } from "react-redux";


const userContext=createContext({
    loggedInUser: ""
})
export default userContext