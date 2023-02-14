import { Logo } from "../components/icons/Icons";
import { useLocation, Link } from "react-router-dom";
import SignUp from "../auth/SignUp";
const Auth = () => {
  const path = useLocation().pathname.includes("login");
  return (
    <div className="min-h-screen w-full">
      <nav className="flex justify-center">
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
              to={path ? "/signup" : "/login"}
              className="text-primary-700 ml-1"
            >
              {path ? "Sign up" : "Login"}
            </Link>
          </p>
        </div>
      </nav>
      <SignUp />
    </div>
  );
};
export default Auth;
