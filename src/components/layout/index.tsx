// import { Outlet } from "react-router-dom";
import { useState, PropsWithChildren, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, CardsIcon, TasksIcon, Logo } from "../icons";
interface Props {
  // children: React.ReactNode;
}
const SideNavItems = () => {
  const location = useLocation();
  const navItems = [
    { name: "Dashboard", path: "/app/dashboard", icon: HomeIcon },
    { name: "Cards", path: "/app/cards", icon: CardsIcon },
    { name: "Transactions", path: "/app/transactions", icon: TasksIcon },
  ];
  // const [currentRoute, setCurrentRoute] = useState("")

  // useEffect(() => {
  //   setCurrentRoute(location)
  // }, [location]);

  const [active, setActive] = useState<boolean>(false);
  return (
    <ul className="mt-6">
      {navItems.map((item, index) => (
        <li
          key={index}
          className={`${
            location.pathname.includes(item.path) &&
            "bg-gray-100 text-primary-700"
          } block py-2 text-gray-700 hover:text-primary-700 hover:bg-gray-100 px-4 mb-1 rounded-md`}
        >
          <Link to={item.path}>
            <div className={`${active ? "#6941C6" : "#667085"} flex`}>
              <item.icon stroke={`${active ? "#6941C6" : "#667085"}`} />
              <h4 className="ml-4 font-medium">{item.name}</h4>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const SideNavigation = () => {
  return (
    <div className="w-[330px] py-8 px-6">
      <div>
        <Logo />
      </div>
      <SideNavItems />
    </div>
  );
};

const Layout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div className="flex">
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
