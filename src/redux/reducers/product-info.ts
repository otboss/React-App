import { HardwareItem, ItemCategory } from "../../misc/HardwareItem";

interface Action {
  type: string;
  hardwareItem: HardwareItem;
}

export const productInfoReducer = function (state: HardwareItem = new HardwareItem("", 3, "", "", 0.0, "", 0, "", ItemCategory.Tools), action: Action) {
  switch (action.type) {
    case "SET":
      state = action.hardwareItem;
      return state;
    default:
      return state;
  }
}

