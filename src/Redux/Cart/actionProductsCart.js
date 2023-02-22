import { actionTypesCart } from "./productsCartActionTypes";
export const loadProductCart = () => ({
  type: actionTypesCart.PRODUCT_INTO_CART_START,
});

export const addProductIntoCart = (product) => ({
  type: actionTypesCart.ADD_PRODUCT_INTO_CART_SUCCESS,
  product,
});

export const decreseQuantityProduct = (id) => ({
  type: actionTypesCart.DECRASE_QUANTINTY_PRODUCTS,
  id,
});
export const deleteProductFromCart = (id) => ({
  type: actionTypesCart.DELETE_PRODUCT_INTO_CART_SUCCESS,
  id,
});
export const summaryQtyProductIntoCart = () => ({
  type: actionTypesCart.SUMMARY_QUANTITY_PRODUCT_INTO_CART,
});
export const loadErrorCart = (error) => ({
  type: actionTypesCart.PRODUCT_INTO_CART_ERROR,
  error,
});
