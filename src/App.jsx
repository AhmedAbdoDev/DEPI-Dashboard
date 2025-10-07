import { Routes, Route } from "react-router-dom";
import Candidates from "./pages/Candidates";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashboardLayout from "./layouts/DashboardLayout";
import PublicLayout from "./layouts/PublicLayout";
import MyTaskPage from "./pages/myTask";
import Hero from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<h1>Dashboard</h1>} />
        <Route path="candidates" element={<Candidates />} />
        <Route path="tasks" element={<MyTaskPage />} />
      </Route>
    </Routes>
  );
}

export default App;
