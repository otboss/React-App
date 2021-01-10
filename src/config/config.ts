import { Environment } from "../misc/Environment";

export abstract class Config {

  public static getEnvironment(): Environment {
    //@ts-ignore
    const environment: Environment = process.env;
    return {
      "REACT_APP_BACKEND_PORT": parseInt(environment.REACT_APP_BACKEND_PORT.toString()),
      "REACT_APP_BACKEND_URL": environment.REACT_APP_BACKEND_URL
    }
  }

  public static baseURL: string = `${Config.getEnvironment().REACT_APP_BACKEND_URL}:${Config.getEnvironment().REACT_APP_BACKEND_PORT}`;
}