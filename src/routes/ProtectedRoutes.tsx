import App from "../pages/app";
import AppRoutes from "../pages/app/AppRoutes";
import { RouteSchema } from "../types/Index";

const ProtectedRoutes: RouteSchema[] = [
  { path: "/app/*", element: <App />, children: AppRoutes },
];

export default ProtectedRoutes;
