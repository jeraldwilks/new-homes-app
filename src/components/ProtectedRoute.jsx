import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import MyAppBar from "./MyAppBar";

const ProtectedRoute = () => {
  const nav = useNavigate();
  const { user, loading } = useAuth();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user) {
    nav("/login");
  } else {
    return (
      <>
        <MyAppBar />
        <Outlet />
      </>
    );
  }
};

export default ProtectedRoute;
