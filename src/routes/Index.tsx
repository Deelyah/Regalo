import { useRoutes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
const Routes = () => {
  const element = useRoutes([...PublicRoutes]);
  return <>{element}</>;
};

export default Routes;
