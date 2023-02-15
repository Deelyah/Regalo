import { Logo } from "../components/icons/Icons";
import { useLocation, Link, Outlet } from "react-router-dom";
const Auth = () => {
  const path = useLocation().pathname.includes("login");
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <nav className="flex justify-center fixed left-0 right-0">
        <div className="w-10/12 py-5 flex items-center">
          <div className="flex items-center">
            <Logo />
            <h2 className="text-gray-900 font-semibold text-2xl ml-2">
              Regalo
            </h2>
          </div>
          <p className="ml-auto text-gray-400">
            {path ? "Don't" : "Already"} have an account?{" "}
            <Link
              to={path ? "/auth/signup" : "/auth/login"}
              className="text-primary-700 ml-1"
            >
              {path ? "Sign up" : "Login"}
            </Link>
          </p>
        </div>
      </nav>
      <div className="flex w-full justify-center items-center min-h-screen">
        <Outlet />
      </div>
    </div>
  );
};
export default Auth;
