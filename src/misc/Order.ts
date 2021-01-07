import { CartItem } from "./CartItem";

export class Order {
  public cartItems: Array<CartItem> = [];
  public trackingNumber: string = "";
  public orderNumber: string = "";
  public timestamp: number = Date.now();
}