import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { reducer as formReducer } from "redux-form";
import products from "../components/products/reducers/products";


// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  form: formReducer,
  products: products
});
