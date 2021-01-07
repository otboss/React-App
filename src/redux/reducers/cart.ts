import { CartItem } from "../../misc/CartItem";
import { Order } from "../../misc/Order";

interface Action {
  type: string;
  cartItem: CartItem;
  order: Order;
  isOrder: boolean;
}

export const cartReducer = function (state: CartState = new CartState(), action: Action) {
  switch (action.type) {
    case "ADD":
      if (state.cartItems[action.cartItem.item.itemCode] == null) {
        state.cartItems[action.cartItem.item.itemCode] = action.cartItem;
      }
      else {
        state.cartItems[action.cartItem.item.itemCode].quantity = action.cartItem.quantity;
      }
      if (state.cartItems[action.cartItem.item.itemCode].quantity == 0) {
        delete state.cartItems[action.cartItem.item.itemCode];
      }
      return state;
    case "EMPTY":
      state.cartItems = {};
      return state;
    case "ORDER":
      state.isOrder = true;
      state.order = action.order;
      return state;
    case "ORDER_OFF":
      state.isOrder = false;
      return state;
    default:
      return state;
  }
}

class CartState {
  constructor(
    public cartItems: Record<string, CartItem> = {},
    public order: Order = new Order(),
    public isOrder: boolean = false,
  ) { }
}