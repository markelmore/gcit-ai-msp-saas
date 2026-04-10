import { useState } from "react";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Billing from "./pages/Billing";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [page, setPage] = useState("dashboard");

  if (!token) return <Login setToken={setToken} />;

  if (page === "billing") return <Billing />;
  if (page === "dashboard") return <Dashboard />;

  return <Dashboard />;
}