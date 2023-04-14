import {createContext} from "react";

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLeve

}

export const AppContext = createContext<>()