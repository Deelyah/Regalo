import React from "react";
import Test from "../Test";
import AuthRoutes from "../pages/auth/Routes";
import Auth from "../pages/auth";
interface RouteSchema {
  path?: string;
  element: React.ReactNode | null;
  index?: any;
  children?: RouteSchema[];
}
const PublicRoutes: RouteSchema[] = [
  { path: "/test", element: <Test /> },
  { path: "/auth/*", element: <Auth />, children: AuthRoutes },
];
export default PublicRoutes;
