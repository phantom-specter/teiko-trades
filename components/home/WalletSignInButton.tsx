"use client";

import Image from "next/image";

import AppLogo from "@/public/logo/teikolabs.png";

const WalletSignInButton = () => {
  return (
    <li className="flex cursor-pointer items-center gap-2 rounded-lg bg-appYellow200 px-3 py-1 font-bold transition-all duration-300 hover:scale-105 active:scale-95">
      <Image
        src={AppLogo}
        className="size-8 rounded-full object-fill"
        alt="Avatar"
      />
      <span>Disconnect Wallet</span>
    </li>
  );
};

export default WalletSignInButton;
