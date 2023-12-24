import React, { useEffect } from "react";
import { Outlet, redirect, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const ProtectedRoute = () => {
  const nav = useNavigate();
  const { user, loading } = useAuth();

  //   useEffect(() => {
  //     if (!user) {
  //       console.log("hi");
  //       nav("/login");
  //     }
  //   }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    nav("/login");
  } else {
    return <Outlet />;
  }
};

export default ProtectedRoute;
