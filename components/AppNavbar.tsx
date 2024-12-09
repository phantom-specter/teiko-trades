import Link from "next/link";
import Image from "next/image";

import {
  Fa6BrandsSquareXTwitter,
  FluentPersonSupport28Filled,
  IcBaselineLanguage,
  LogosDiscordIcon,
} from "./icons";
import AppLogo from "@/public/logo/teikolabs.png";
import routes from "@/navigation/routes";
import WalletSignInButton from "./home/WalletSignInButton";

const socials = [
  {
    title: "Discord",
    icon: <LogosDiscordIcon />,
  },
  {
    title: "X",
    icon: <Fa6BrandsSquareXTwitter />,
  },
  {
    title: "Support",
    icon: <FluentPersonSupport28Filled />,
  },
];

const AppNavbar = () => {
  return (
    <header>
      <nav className="app-container flex items-center justify-between py-3">
        <ul className="flex items-center gap-5">
          <li>
            <Link className="block" href={routes.HOME_PAGE}>
              <Image src={AppLogo} alt="logo" className="w-full max-w-20" />
            </Link>
          </li>
          {socials?.map(({ icon, title }, key) => (
            <li
              className="flex cursor-pointer items-center gap-2 transition-all duration-300 hover:scale-105 hover:text-appYellow100 active:scale-95 sm:text-base"
              key={key}
            >
              <span className="text-base md:text-lg lg:text-xl"> {icon}</span>
              <span className="sm:text-base">{title}</span>
            </li>
          ))}
        </ul>

        <Link
          href={routes.HOW_IT_WORKS_PAGE}
          className="font-medium sm:text-base"
        >
          How It Works
        </Link>

        <ul className="flex items-center gap-5">
          <li className="flex items-center gap-2">
            <IcBaselineLanguage className="text-base md:text-lg lg:text-xl" />
            <span>English</span>
          </li>

          <li className="sm:text-base">View Profile</li>

          <WalletSignInButton />
        </ul>
      </nav>
    </header>
  );
};

export default AppNavbar;
