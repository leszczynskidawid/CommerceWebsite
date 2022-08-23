import { productsInitialValue } from "./productsInitialValue";

import { actionTypes } from "./productActionTypes";

export const productsReducers = (state = productsInitialValue, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LOAD_START:
      return {
        ...state,
        isLoading: true,
        products: null,
        isErrors: null,
      };
    case actionTypes.PRODUCT_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: action.products,
      };
    case actionTypes.PRODUCT_LOAD_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.errors,
      };
    case actionTypes.PRODUCT_LOAD_DETAILS_SUCCES:
      return {
        ...state,
        isLoading: false,
        product: action.product,
      };
    default:
      return state;
  }
};
