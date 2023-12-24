import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

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

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  const value = {
    user,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
