import React from "react";
import Test from "../Test";
import AuthRoutes from "../pages/auth/Routes";
import Auth from "../pages/auth";
import { RouteSchema } from "../types/Index";

const PublicRoutes: RouteSchema[] = [
  { path: "/test", element: <Test /> },
  { path: "/auth/*", element: <Auth />, children: AuthRoutes },
];
export default PublicRoutes;
