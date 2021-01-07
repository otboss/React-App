import { HardwareItem } from "./HardwareItem";

export class CartItem {
  constructor(
    public item: HardwareItem,
    public quantity: number,
  ) { }
}