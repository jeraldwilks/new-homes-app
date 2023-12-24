import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" Component={Login} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
