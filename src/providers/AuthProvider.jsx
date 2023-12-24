import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();

  const login = async (email, password) => {
    try {
      // let userCred =
      await signInWithEmailAndPassword(auth, email, password);
      // if (userCred) {
      //   console.log("Logged in!!", userCred.user);
      // } else {
      //   console.log("Login failed!");
      // }
    } catch (ex) {
      console.log("AUTH FAILURE!", ex.message);
      return "Invalid login";
    }
    // return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    user,
    login,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
