import React, { createContext } from "react";
import useAuth from "../Hooks/useAuth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allFirebaseValue = useAuth();
  return (
    <AuthContext.Provider value={allFirebaseValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
