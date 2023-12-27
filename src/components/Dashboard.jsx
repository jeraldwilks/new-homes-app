import { Button } from "@mui/material";
import React from "react";
import { useAuth } from "../providers/AuthProvider";
import BuildingList from "./BuildingList";

const Dashboard = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h1>Dashboard</h1>
      <Button onClick={logout}>Sign Out</Button>
      <BuildingList />
    </div>
  );
};

export default Dashboard;
