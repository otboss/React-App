import { HardwareItem } from "./HardwareItem";

/**
 * Provides methods for communicating with the GraphQL server
 */
export abstract class ServerAPI {
  public static getHardwareItems(): Array<HardwareItem> {
    throw new Error('Method not implemented.');
  }

  public static login(email: string, password: string) {

  }
}