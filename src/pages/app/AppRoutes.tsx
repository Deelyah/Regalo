import { Navigate } from "react-router-dom";
import { RouteSchema } from "../../types/Index";
import Cards from "./cards";
import Dashboard from "./dashboard";
import Transactions from "./transactions";
const AppRoutes: RouteSchema[] = [
  { index: true, element: <Navigate to="/app/dashboard" replace /> },
  { path: "dashboard", element: <Dashboard /> },
  { path: "cards", element: <Cards /> },
  { path: "transactions", element: <Transactions /> },
];

export default AppRoutes;
