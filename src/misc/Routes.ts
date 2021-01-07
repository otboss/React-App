export abstract class RouteEntries {
  public static readonly cart: string = "cart";
  public static readonly home: string = "home";
  public static readonly productInfo: string = "product_info";
  public static readonly orders: string = "orders";
}

export abstract class Routes {
  public static readonly cart: string = RouteEntries.cart;
  public static readonly home: string = RouteEntries.home;
  public static readonly orders: string = RouteEntries.cart + "/" + RouteEntries.orders;
  public static readonly productInfo: string = RouteEntries.home + "/" + RouteEntries.productInfo;
}