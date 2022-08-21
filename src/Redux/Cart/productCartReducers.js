import { initialValueProductsCart } from "./initialValueProductsCart";
import { actionTypesCart } from "./productsCartActionTypes";

export const reducersCart = (state = initialValueProductsCart, action) => {
  switch (action.type) {
    case actionTypesCart.PRODUCT_INTO_CART_START:
      return {
        ...state,
        isLoading: true,
        cart: null,
        isErrors: null,
      };

    case actionTypesCart.ADD_PRODUCT_INTO_CART_SUCCESS: {
      const checkPrductExist = state.cart.find(
        (product) => product.id === action.product.id,
      );

      if (!checkPrductExist) {
        return {
          ...state,
          isLoading: false,
          cart: [...state.cart, action.product],
        };
      }
      break;
    }

    case actionTypesCart.DELETE_PRODUCT_INTO_CART_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: action.errors,
      };
    case actionTypesCart.PRODUCT_INTO_CART_ERROR:
      return {
        ...state,
        isLoading: false,
        product: action.product,
      };
    default:
      return state;
  }
};
