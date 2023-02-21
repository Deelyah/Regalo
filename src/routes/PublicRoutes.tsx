// This route holds all public routes and is used in the index file of this folder to display each route according to user auth

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
