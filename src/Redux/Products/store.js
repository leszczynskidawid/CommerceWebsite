import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

// const configureStores = () => {
//   const middleware = [thunk];
//   const composeEn = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   const enhancers = composeEn(applyMiddleware(...middleware));
//   const store = configureStore(rootReducer(), enhancers);

//   return store;
// };
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
