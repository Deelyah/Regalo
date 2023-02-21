import { PropsWithChildren } from "react";
interface Props {
  bgColor?: string;
}
const BaseCard: React.FC<PropsWithChildren<Props>> = ({
  children,
  bgColor,
}) => {
  return (
    <div
      className={`border rounded-lg ${
        bgColor ? bgColor : "bg-white"
      } shadow-sm`}
    >
      {children}
    </div>
  );
};

export default BaseCard;
