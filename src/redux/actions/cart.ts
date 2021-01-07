import { CartItem } from "../../misc/CartItem";
import { Order } from "../../misc/Order";

export abstract class CartActions {
  public static add(cartItem: CartItem) {
    return {
      type: "ADD",
      cartItem
    }
  }
  public static emptyCart() {
    return {
      type: "EMPTY",
    }
  }
  public static setOrder(order: Order) {
    return {
      type: "ORDER",
      order
    }
  }
  public static toggleOrderOff() {
    return {
      type: "ORDER_OFF",
    }
  }
}