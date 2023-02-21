import { Navigate } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const AuthRoutes = [
  { index: true, element: <Navigate to="/auth/login" replace /> },
  { path: "login", element: <Login /> },
  { path: "signup", element: <SignUp /> },
];

export default AuthRoutes;
