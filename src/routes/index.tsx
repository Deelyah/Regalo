//This is the major route file. It is used directly in App.tsx to display routes according to user auth.

import { useRoutes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
const AllRoutes = () => {
  const element = useRoutes([...PublicRoutes, ...ProtectedRoutes]);
  return <>{element}</>;
};

export default AllRoutes;
