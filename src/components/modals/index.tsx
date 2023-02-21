import { PropsWithChildren } from "react";
import BaseCard from "../cards/BaseCard";

interface Props {
  display?: boolean;
}

const Modal: React.FC<PropsWithChildren<Props>> = ({ children, display }) => {
  return (
    <div
      className={`fixed inset-0 bg-[#9044ec4b] backdrop-blur-[3px] flex justify-center items-center ${
        !display && "hidden"
      } `}
    >
      <BaseCard>{children}</BaseCard>
    </div>
  );
};

export default Modal;
