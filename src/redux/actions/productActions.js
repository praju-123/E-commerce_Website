import { actionTypes } from "../constants/action-types";

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
