import fakeStoreApi from "../../apis/fakeStoreApi";
import { actionTypes } from "../constants/action-types";

export const fetchProduct = () => async (dispatch) => {
  const response = await fakeStoreApi.get("/products");
  dispatch({ type: actionTypes.FETCH_PRODUCTUS, payload: response.data });
};

export const fetchProductDetails = (productId) => async (dispatch) => {
  const response = await fakeStoreApi.get(`/products/${productId}`);
  console.log("detail is ", response.data);

  dispatch({
    type: actionTypes.FETCH_PRODUCTUS_DETAILS,
    payload: response.data,
  });
};

export const removeSelectedProduct = () => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
