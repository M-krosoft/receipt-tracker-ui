import {
  AuthContext,
  AuthContextData,
} from "@/features/authentication/auth-context/AuthContext";
import { useContext } from "react";

export const useAuthContext = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return context;
};
