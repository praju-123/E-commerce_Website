import { actionTypes } from "../constants/action-types";
const initialState = {
  products: [3, 4, 5],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_PRODUCTUS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_PRODUCTUS_DETAILS:
      return { ...state, ...payload };
    case actionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
