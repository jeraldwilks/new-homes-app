import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useAuth } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

export default function MyAppBar() {
  const { logout } = useAuth();
  const nav = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography
            onClick={() => nav("/dashboard")}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Map
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            List Buildings
          </Typography>
          <Typography
            onClick={() => nav("/addbuilding")}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Add Building
          </Typography>
          <Button onClick={logout} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
