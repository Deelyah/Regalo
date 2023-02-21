import { useState } from "react";
import { CloseIcon } from "../../../components/icons";
import Modal from "../../../components/modals";

// ============================================
//

interface Props {
  onClick?: () => void;
  display: boolean;
}
const TransferFunds: React.FC<Props> = ({ onClick, display }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Modal display={display}>
      <div className="p-6">
        <div className="mb-6 flex">
          <h3 className="font-semibold text-2xl">Fund Transfer</h3>
          <button
            className="py-1.5 px-2 hover:border rounded-md ml-auto hover:bg-gray-100"
            onClick={onClick}
          >
            <CloseIcon />
          </button>
        </div>
        <div className="bg-gray-100 rounded-lg p-1">
          <button
            className={`px-6 py-2 ${
              isActive && "bg-white text-gray-700 shadow-sm"
            } rounded-md text-gray-500 font-medium`}
            onClick={() => {
              setIsActive(true);
            }}
          >
            Saved Beneficiary
          </button>
          <button
            className={`px-6 py-2 rounded-md ${
              !isActive && "bg-white text-gray-700 shadow-sm"
            } text-gray-500 font-medium`}
            onClick={() => {
              setIsActive(false);
            }}
          >
            Add Beneficiary
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default TransferFunds;
