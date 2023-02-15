import React from "react";
import Auth from "../pages/Index";
import Test from "../Test";
import AuthRoutes from "../pages/auth/Routes";
// interface RouteSchema {
//   path: "";
//   element: React.ReactNode;
//   children?: React.ReactNode[] | RouteSchema;
// }
const PublicRoutes = [
  { path: "/test", element: <Test /> },
  { path: "/auth/*", element: <Auth />, children: AuthRoutes },
];
export default PublicRoutes;
