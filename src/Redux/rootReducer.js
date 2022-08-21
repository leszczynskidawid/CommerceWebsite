import { combineReducers } from "redux";
import { productsReducers } from "../Redux/Products/productsReducers";
import { reducersCart } from "./Cart/productCartReducers";

const rootReducer = combineReducers({
  products: productsReducers,
  cart: reducersCart,
});
export default rootReducer;
