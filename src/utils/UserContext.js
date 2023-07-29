import { createContext } from "react";
import useOnlineStatus from "./UseOnlineStatus";

export const UserContext = createContext({
  loggedInUser: "satya",
});

export const OnlineContext = createContext(false);
