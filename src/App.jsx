import "./App.css";
import { Routes, Route } from "react-router-dom";
import Candidates from "./pages/Candidates";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardLayout from "./layouts/DashboardLayout";
import PublicLayout from "./layouts/PublicLayout";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/candidates" element={<Candidates />} />
      </Route>
    </Routes>
  );
}

export default App;
