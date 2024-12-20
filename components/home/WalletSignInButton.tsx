"use client";

import Image from "next/image";

import { useAuthenticate } from "@/hooks/useAuthenticate";
import AppLogo from "@/public/logo/teikolabs.png";
import { useAppStateStore } from "@/stores/appState.store";
import LogoutModal from "../modals/LogoutModal";

const WalletSignInButton = () => {
  const { isLoggedIn, Login, Logout } = useAuthenticate();
  const { setActiveModal } = useAppStateStore();

  const handleMutation = () => {
    if (!isLoggedIn) {
      Login();
    } else {
      setActiveModal({
        modalType: "EMPTY_MODAL",
        emptyModalComponent: <LogoutModal onDecline={Logout} />,
      });
    }
  };

  return (
    <li
      onClick={handleMutation}
      className="flex cursor-pointer items-center gap-2 rounded-lg bg-appYellow200 px-3 py-1 font-bold transition-all duration-300 hover:scale-105 active:scale-95"
    >
      {isLoggedIn ? (
        <>
          <Image
            src={AppLogo}
            className="size-8 rounded-full object-fill"
            alt="Avatar"
          />
          <span>Disconnect Wallet</span>
        </>
      ) : (
        <span className="p-3">Connect Wallet</span>
      )}
    </li>
  );
};

export default WalletSignInButton;
