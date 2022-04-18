import { combineReducers } from "redux";
import cartData from "./reducers";
import openCloseDrawer from "./openCloseDrawer"

const rootReducer =  combineReducers({
    cartData,openCloseDrawer
});

export default rootReducer;
