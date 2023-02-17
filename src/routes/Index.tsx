import { useRoutes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
const Routes = () => {
  const element = useRoutes([...PublicRoutes, ...ProtectedRoutes]);
  return <>{element}</>;
};

export default Routes;
