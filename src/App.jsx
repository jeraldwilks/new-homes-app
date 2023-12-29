import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Dashboard from "./components/Dashboard.jsx";
import AddBuilding from "./components/AddBuilding.jsx";
import ListBuildings from "./components/ListBuildings.jsx";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" Component={Login} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" Component={Dashboard} />
            <Route path="/addbuilding" Component={AddBuilding} />
            <Route path="/listbuildings" Component={ListBuildings} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
