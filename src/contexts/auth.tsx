"use client";

import {
  useContext,
  useState,
  createContext,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

type AuthType = {
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};

const defaulValues: AuthType = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
};

const AuthContext = createContext(defaulValues);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  return useContext(AuthContext);
}
