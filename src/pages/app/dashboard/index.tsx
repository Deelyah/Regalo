import PrimaryButton from "../../../components/buttons/PrimaryButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import TertiaryButton from "../../../components/buttons/TertiaryButton";
import BaseCard from "../../../components/cards/BaseCard";
import { GiftIcon } from "../../../components/icons";

export const FirstDashboardSection = () => {
  return (
    <div className="flex pb-6">
      <h2 className="font-medium text-gray-700 text-3xl">
        Welcome Back, Olivia
      </h2>
      <div className="ml-auto flex items-center">
        <TertiaryButton style="py-2.5 px-4" btnText="Accounts" />
        <div className="ml-3">
          <PrimaryButton style="py-2.5 px-4" btnText="Gift Cards" />
        </div>
      </div>
    </div>
  );
};

export const SecondDashboardSection = () => {
  return (
    <div className="flex w-full">
      <div className="px-6 w-3/5">
        <BaseCard>
          {/* <div className="border-b rounded-t bg-primary-600 py-4 px-6 flex justify-end h-10"></div> */}
          <div className="flex py-6 px-6">
            <div className="">
              <p className="font-medium text-gray-400 mb-6">Main Account</p>
              <h3 className="font-semibold text-2xl mb-4">
                Regalo Savings Account
              </h3>
              <p className="text-sm text-gray-400">4455 3344 6767</p>
              <div className="mt-6 flex items-center">
                <PrimaryButton btnText="Transfer Funds" style="py-2.5 px-4" />
                <div className="ml-3">
                  <SecondaryButton btnText="Fund Account" style="py-2.5 px-4" />
                </div>
              </div>
            </div>
            <div className="ml-auto">
              <p className="text-right font-medium text-gray-400 mb-8">
                Balance
              </p>
              <h3 className="text-right text-4xl font-semibold">$450,000.00</h3>
            </div>
          </div>
        </BaseCard>
      </div>
      <div className="px-6 w-2/5">
        <BaseCard bgColor="bg-primary-600">
          <div className="flex flex-col py-6 px-6 w-full">
            <div className="flex items-center">
              <div className="flex p-2 rounded-lg bg-white w-fit mb-4">
                <GiftIcon />
              </div>
              <p className="font-semibold mb-6 text-2xl text-white ml-6">
                Total Gift Cards
              </p>
            </div>
            <div className="rounded-lg border-2 border-[#ffffff10] bg-[#ffffff80] text-white w-full p-4">
              <h3 className="font-semibold text-lg mb-4">
                You have 0 Gift Cards
              </h3>

              <div className="mt-6 flex items-center">
                <div className="ml-3">
                  <TertiaryButton
                    btnText="Create Gift Card"
                    style="py-2.5 px-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div>
      <FirstDashboardSection />
      <SecondDashboardSection />
    </div>
  );
};

export default Dashboard;
