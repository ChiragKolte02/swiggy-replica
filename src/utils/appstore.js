import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartslice";
import userReducer from "./userslice";

const Appstore = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default Appstore;
