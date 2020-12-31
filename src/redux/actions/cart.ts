import { HardwareItem } from "../../misc/HardwareItem"

export abstract class CartActions {
  public static add(hardwareItem: HardwareItem) {
    return {
      type: "ADD",
      hardwareItem
    }
  }
  public static remove() {
    return {
      type: "REMOVE"
    }
  }
}