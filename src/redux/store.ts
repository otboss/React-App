import { createStore, combineReducers } from "redux";
import { CartActions } from "./actions/cart";
import { ProductInfoActions } from "./actions/product-info";
import { cartReducer } from "./reducers/cart";
import { productInfoReducer } from "./reducers/product-info";


const reducers = combineReducers({
  cart: cartReducer,
  productInfo: productInfoReducer,
});

export const store = createStore(reducers);

export const ReduxActions = {
  CartActions,
  ProductInfoActions,
}