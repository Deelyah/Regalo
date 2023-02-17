// import { Outlet } from "react-router-dom";
import { HomeIcon, CardsIcon } from "../icons";
interface Props {
  children?: React.ReactNode;
}
const SideNavItems = () => {
  const navItems = [
    { name: "Home", icon: HomeIcon },
    { name: "Cards", icon: CardsIcon },
    { name: "Transactions", icon: "icon" },
  ];
  return (
    <ul>
      {navItems.map((item, index) => (
        <li className="px-3 py-2" key={index}>
          <div className="flex">
            <item.icon />
            <h4>{item.name}</h4>
          </div>
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
