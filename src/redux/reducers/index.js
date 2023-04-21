import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

console.log("product reducer");
export const reducers = combineReducers({
  allProducts: productReducer,
});
