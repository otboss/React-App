export abstract class RouteEntries {
  public static readonly cart: string = "cart";
  public static readonly home: string = "home";
  public static readonly productInfo: string = "product_info";
}

export abstract class Routes {
  public static readonly cart: string = RouteEntries.cart;
  public static readonly home: string = RouteEntries.home;
  public static readonly productInfo: string = RouteEntries.home + "/" + RouteEntries.productInfo;
}