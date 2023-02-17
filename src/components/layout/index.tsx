// import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { HomeIcon, CardsIcon, TasksIcon } from "../icons";
interface Props {
  children: React.ReactNode;
}
const SideNavItems = () => {
  const navItems = [
    { name: "Dashboard", path: "/app/dashboard", icon: HomeIcon },
    { name: "Cards", path: "/app/cards", icon: CardsIcon },
    { name: "Transactions", path: "/app/transactions", icon: TasksIcon },
  ];
  return (
    <ul>
      {navItems.map((item, index) => (
        <li key={index}>
          <NavLink className="px-3 py-2" to={item.path}>
            <div className="flex">
              <item.icon />
              <h4>{item.name}</h4>
            </div>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

const SideNavigation = () => {
  return (
    <div>
      <SideNavItems />
    </div>
  );
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex">
      <SideNavigation />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
