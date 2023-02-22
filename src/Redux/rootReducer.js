import { combineReducers } from "redux";
import { productsReducers } from "../Redux/Products/productsReducers";
import { reducersCart } from "./Cart/productCartReducers";
import { modalsReducer } from "./ModalState/reducerModal";

const rootReducer = combineReducers({
  products: productsReducers,
  cart: reducersCart,
  modals: modalsReducer,
});
export default rootReducer;
