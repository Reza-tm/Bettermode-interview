import { createContext, useContext } from "react";
import { UserData } from "@/types/user";

export const UserDataContext = createContext<UserData>({
  accessToken: null,
});

export const useUserData = () => useContext(UserDataContext);
