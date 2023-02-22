import { initialValueProductsCart } from "./initialValueProductsCart";
import { actionTypesCart } from "./productsCartActionTypes";

export const reducersCart = (state = initialValueProductsCart, action) => {
  switch (action.type) {
    case actionTypesCart.PRODUCT_INTO_CART_START: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case actionTypesCart.ADD_PRODUCT_INTO_CART_SUCCESS: {
      const sumqty = state.cart.reduce((prevValue, currentValue) => {
        return prevValue + currentValue.quantity;
      }, 1);

      const exist = state.cart.find(
        (product) => product.id === action.product.id,
      );

      if (exist) {
        const item = state.cart.map((product) =>
          product.id === action.product.id
            ? {
                ...product,
                quantity: product.quantity + 1,
                sumaryPrice: (product.quantity + 1) * product.price,
              }
            : product,
        );
        return {
          ...state,
          cart: item,
          cartQty: sumqty,
          isLoading: false,
        };
      } else {
        const product = action.product;

        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...product,
              quantity: 1,
              sumaryPrice: product.price,
            },
          ],
          cartQty: sumqty,
          isLoading: false,
        };
      }
    }

    case actionTypesCart.DECRASE_QUANTINTY_PRODUCTS: {
      const exist = state.cart.find((product) => product.id === action.id);

      if (exist) {
        const item = state.cart.map((product) =>
          product.id === action.id
            ? {
                ...product,
                quantity: product.quantity - 1,
                sumaryPrice: (product.quantity - 1) * product.price,
              }
            : product,
        );
        const sumqty = item.reduce((prevValue, currentValue) => {
          return prevValue + currentValue.quantity;
        }, 0);
        return {
          ...state,
          cart: item,
          cartQty: sumqty,
          isLoading: false,
        };
      }
      break;
    }
    case actionTypesCart.DELETE_PRODUCT_INTO_CART_SUCCESS: {
      const copy = state.cart.filter((product) => product.id !== action.id);

      const sum = copy?.reduce((prev, curentValue) => {
        return prev + curentValue.quantity;
      }, 0);

      return {
        ...state,
        cart: copy,
        cartQty: sum,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};
