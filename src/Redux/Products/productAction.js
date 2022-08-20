import { apiClientEndpointsTypes } from "../../constants/apiClientEndpointsTypes";
import { ApiClientMethodTypes } from "../../constants/ApiClientMethodTypes";
import { useRequest } from "../../Hooks/useRequest";

export const SUCCESS_FETCH_DATA = "SUCCESS_FETCH_DATA";

import { actionTypes } from "./productActionTypes";

export const productLoadStart = () => ({
  type: actionTypes.PRODUCT_LOAD_START,
});
export const productLoadSuccess = (products) => ({
  type: actionTypes.PRODUCT_LOAD_SUCCESS,
  products,
});

export const productLoadError = (errors) => ({
  type: actionTypes.PRODUCT_LOAD_ERROR,
  errors,
});

export const fetchBooks = (books) => {
  return {
    type: SUCCESS_FETCH_DATA,
    books,
  };
};

export const getAllProducts = async (dispatch) => {
  const { callApiRequest } = useRequest();
  dispatch(productLoadStart());
  try {
    const response = await callApiRequest(
      ApiClientMethodTypes.get,
      apiClientEndpointsTypes.PRODUCTS_END_POINT,
    );
    dispatch(productLoadSuccess(response));
  } catch (error) {
    dispatch(productLoadError(error.code));
  }
};

export const getProductsbyCategories = (endpointType) => async (dispatch) => {
  const { callApiRequest } = useRequest();
  dispatch(productLoadStart());
  try {
    const response = await callApiRequest(
      ApiClientMethodTypes.get,
      endpointType,
    );
    dispatch(productLoadSuccess(response));
  } catch (error) {
    dispatch(productLoadError(error.code));
  }
};
