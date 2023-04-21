import { combineReducers } from "redux";
import { productReducer, selectProductReducer } from "./productReducer";

console.log("product reducer");
export const reducers = combineReducers({
  allProducts: productReducer,
  product: selectProductReducer,
});
