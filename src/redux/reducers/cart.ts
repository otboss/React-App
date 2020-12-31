import { HardwareItem } from "../../misc/HardwareItem";

interface Action {
  type: string;
  hardwareItem: HardwareItem;
  indexToRemove: number;
}

export const cartReducer = function (state: Array<HardwareItem> = [], action: Action) {
  switch (action.type) {
    case "ADD":
      state.push(action.hardwareItem);
      return state;
    case "REMOVE":
      state.splice(action.indexToRemove, 1);
      return state;
    default:
      return state;
  }
}

