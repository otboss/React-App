import { Config } from "../config/config";
import { CartItem } from "./CartItem";
import { HardwareItem, ItemCategory } from "./HardwareItem";
import { Order } from "./Order";

/**
 * Handles all requests to backend
 * */
export abstract class ServerAPI {
  private static token: string;

  public static async checkout(cartItems: CartItem[]): Promise<Response> {
    // TODO: Implement connection to backend
    return new Response;
  }

  public static async getHardwareItems(filter: string = "", offset: number = 0, limit: number = 50): Promise<Array<HardwareItem>> {
    return [
      new HardwareItem("", 3.5, "Mallet", "https://images-na.ssl-images-amazon.com/images/I/71YPA-X5bOL._AC_SL1500_.jpg", 240.50, "A standard-issue rubber mallet", 10, "SHM1203", ItemCategory.Tools),
    ];
    const response = await fetch(`${Config.baseURL}${ServerAPI.routes.graphql}`, {
      "method": "POST",
      "body": JSON.stringify({ "query": ` query{hardwareItems(filter: "${filter}") {item_id, label, image, rating, description, cost, shipping_fee}}`, "variables": null }),
      "headers": { 'Content-Type': 'application/json' },
    });
    return await response.json();
  }

  public static async signIn(email: string, username: string, password: string) {
    const response = await fetch(`${Config.baseURL}${ServerAPI.routes.signUp}`, {
      "method": "POST",
      "body": JSON.stringify({
        "email": email,
        "username": username,
        "password": password,
      }),
      "headers": { 'Content-Type': 'application/json' },
    });
    ServerAPI.token = await response.text();
  }


  public static async signUp(email: string, password: string) {
    const response = await fetch(`${Config.baseURL}${ServerAPI.routes.signIn}`, {
      "method": "POST",
      "body": JSON.stringify({
        "email": email,
        "password": password,
      }),
      "headers": { 'Content-Type': 'application/json' },
    });
    ServerAPI.token = await response.text();
  }

  public static async getOrders(filter: string = ""): Promise<Array<Order>> {
    const order = new Order();
    order.cartItems = [new CartItem((await ServerAPI.getHardwareItems())[0], 2)];
    order.orderNumber = "SRW1234";
    order.trackingNumber = "12345";
    return [
      order
    ];
    const response = await fetch(`${Config.baseURL}${ServerAPI.routes.graphql}`, {
      "method": "POST",
      "body": JSON.stringify({ "query": ` query{  orders(filter:"${filter}", token: "${ServerAPI.token}"){ order_id, tracking_number } }`, "variables": null }),
      "headers": { 'Content-Type': 'application/json' },
    });
    return await response.json();
  }

  private static routes = Object.freeze({
    index: "/",
    app: "/app",
    assets: "/assets",
    signUp: "/sign_up",
    signIn: "/sign_in",
    graphql: "/graphql",
  });
}


