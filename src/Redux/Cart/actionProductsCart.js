import { actionTypesCart } from "./productsCartActionTypes";
export const loadProductCart = () => ({
  type: actionTypesCart.PRODUCT_INTO_CART_START,
});

export const addProductIntoCart = (product) => ({
  type: actionTypesCart.ADD_PRODUCT_INTO_CART_SUCCESS,
  product,
});
export const deleteProductFromCart = (product) => ({
  type: actionTypesCart.DELETE_PRODUCT_INTO_CART_SUCCESS,
  product,
});
export const loadErrorCart = (error) => ({
  type: actionTypesCart.PRODUCT_INTO_CART_ERROR,
  error,
});
