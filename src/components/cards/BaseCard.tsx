import { PropsWithChildren } from "react";

const BaseCard: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="border rounded-lg bg-white shadow-sm">{children}</div>;
};

export default BaseCard;
