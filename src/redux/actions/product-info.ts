import { HardwareItem } from "../../misc/HardwareItem"

export abstract class ProductInfoActions {
  public static set(hardwareItem: HardwareItem) {
    return {
      type: "SET",
      hardwareItem
    }
  }
}