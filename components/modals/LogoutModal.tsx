"use client";

import { JSX } from "react";

import { FluentPlugDisconnected48Filled } from "../icons";
import { useAppStateStore } from "@/stores/appState.store";

interface Props {
  onDecline: () => void;
}

const LogoutModal = ({ onDecline }: Props): JSX.Element => {
  const { closeActiveModal } = useAppStateStore();
  return (
    <div className="flex flex-col items-center justify-center rounded-xl bg-appDarkBlue200 p-6 sm:text-base md:p-7 lg:p-8">
      <span className="text-appRed300 bg-appRed200 rounded-full p-2 text-lg md:text-xl lg:text-2xl">
        <FluentPlugDisconnected48Filled />
      </span>
      <h4 className="mb-2 mt-6 font-medium">Confirm Wallet Disconnect</h4>

      <h5 className="font-medium">You are about to disconnect your wallet</h5>

      <div className="mt-8 flex w-full items-center gap-5">
        <button
          onClick={closeActiveModal}
          type="button"
          className="bg-appWhite200 w-full rounded-lg py-3 font-medium text-appDarkBlue100 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          No, Cancel
        </button>
        <button
          onClick={() => {
            onDecline?.();
            closeActiveModal();
          }}
          type="button"
          className="bg-appRed300 w-full rounded-lg py-3 font-medium text-white transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Yes, Disconnect
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
