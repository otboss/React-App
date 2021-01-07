import { CartItem } from "./CartItem";
import { HardwareItem, ItemCategory } from "./HardwareItem";
import { Order } from "./Order";

/**
 * Handles all requests to backend
 * */
export abstract class ServerAPI {
  public static async checkout(cartItems: CartItem[]): Promise<Response> {
    // TODO: Implement connection to backend
    return new Response;
  }

  public static async getHardwareItems(offset: number = 0, limit: number = 50): Promise<Array<HardwareItem>> {
    // TODO: Implement connection to backend
    return [
      new HardwareItem("", 3.5, "Mallet", "https://images-na.ssl-images-amazon.com/images/I/71YPA-X5bOL._AC_SL1500_.jpg", 240.50, "A standard-issue rubber mallet", 10, "SHM1203", ItemCategory.Tools),
    ];
  }

  public static async login(email: string, password: string) {
    // TODO: Implement connection to backend
  }

  public static async authentication(): Promise<void> {
    // TODO: Implement connection to backend
  }

  public static async getOrders(): Promise<Array<Order>> {
    // TODO: Implement connection to backend
    const order = new Order();
    order.cartItems = [new CartItem((await ServerAPI.getHardwareItems())[0], 2)];
    order.orderNumber = "SRW1234";
    order.trackingNumber = "12345";
    return [
      order
    ];
  }
}