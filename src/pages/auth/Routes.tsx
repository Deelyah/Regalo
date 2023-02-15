import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const AuthRoutes = [
  { path: "login", element: <Login /> },
  { path: "signup", element: <SignUp /> },
];

export default AuthRoutes;
