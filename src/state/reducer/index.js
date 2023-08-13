import { combineReducers } from "redux";
import { CartReducer } from "./cartReducer";


const RootReducer = combineReducers({
    allCarts:CartReducer,
});

export default RootReducer;