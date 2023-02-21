// This route holds all protected routes and is used in the index file of this folder to display each route according to user auth

import App from "../pages/app";
import AppRoutes from "../pages/app/AppRoutes";
import { RouteSchema } from "../types/Index";

const ProtectedRoutes: RouteSchema[] = [
  { path: "/app/*", element: <App />, children: AppRoutes },
];

export default ProtectedRoutes;
