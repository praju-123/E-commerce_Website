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

export const setProduct = (products) => {
  return {
    type: actionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (products) => {
  return {
    type: actionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};

export const removeSelectedProduct = (products) => {
  return {
    type: actionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
