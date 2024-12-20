"use client";

import Link from "next/link";
import Image from "next/image";

import {
  CustomHamburgerIcon,
  Fa6BrandsSquareXTwitter,
  FluentPersonSupport28Filled,
  IcBaselineLanguage,
  LogosDiscordIcon,
  RiCloseFill,
} from "./icons";
import AppLogo from "@/public/logo/teikolabs.png";
import routes from "@/navigation/routes";
import WalletSignInButton from "./home/WalletSignInButton";
import { useEffect, useState } from "react";
import ViewProfileButton from "./home/ViewProfileButton";
import ActiveLinkBorder from "./home/ActiveLinkBorder";

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
  const [isVisible, setVisibility] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      setIsScrolled(scrollPosition > scrollThreshold);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-10 w-full transition-all duration-300 ${isScrolled ? "bg-appBlue100 shadow-lg" : ""}`}
      >
        <nav className="app-container">
          <div className="hidden items-center justify-between py-3 lg:flex">
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
                  <span className="text-base md:text-lg lg:text-xl">
                    {" "}
                    {icon}
                  </span>
                  <span className="sm:text-base">{title}</span>
                </li>
              ))}
            </ul>

            <Link
              href={routes.HOW_IT_WORKS_PAGE}
              className="flex flex-col gap-1 font-medium sm:text-base"
            >
              <span>How It Works</span>
              <ActiveLinkBorder link={routes.HOW_IT_WORKS_PAGE} />
            </Link>

            <ul className="flex items-center gap-5">
              <li className="flex items-center gap-2">
                <IcBaselineLanguage className="text-base md:text-lg lg:text-xl" />
                <span>English</span>
              </li>

              <ViewProfileButton />
              <WalletSignInButton />
            </ul>
          </div>

          <div className="flex items-center justify-between py-3 lg:hidden">
            <Image src={AppLogo} alt="logo" className="w-full max-w-20" />

            <button
              onClick={() => setVisibility(true)}
              className="ml-auto text-base"
              type="button"
            >
              <CustomHamburgerIcon />
            </button>
          </div>
        </nav>
      </header>

      <nav
        className={`fixed inset-0 z-50 w-[80%] rounded-r-3xl bg-appBlue100/90 px-5 transition-all duration-200 sm:w-[70%] lg:-translate-x-full ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between py-5">
          <Link className="block" href={routes.HOME_PAGE}>
            <Image src={AppLogo} alt="logo" className="w-full max-w-20" />
          </Link>

          <button
            onClick={() => setVisibility(false)}
            className="ml-auto text-3xl transition-all duration-300 hover:scale-110 active:scale-90 md:hidden"
            type="button"
          >
            <RiCloseFill />
          </button>
        </header>

        <ul className="flex flex-col items-start gap-y-10 pt-10 text-base">
          {socials?.map(({ icon, title }, key) => (
            <li
              className="flex cursor-pointer items-center gap-2 transition-all duration-300 hover:scale-105 hover:text-appYellow100 active:scale-95 sm:text-base"
              key={key}
            >
              <span className="text-base md:text-lg lg:text-xl"> {icon}</span>
              <span className="sm:text-base">{title}</span>
            </li>
          ))}

          <li className="flex items-center gap-2">
            <IcBaselineLanguage className="text-base md:text-lg lg:text-xl" />
            <span>English</span>
          </li>

          <ViewProfileButton />

          <WalletSignInButton />
        </ul>
      </nav>

      {/* mobile overlay */}
      <div
        onClick={() => setVisibility(false)}
        className={`fixed inset-0 z-40 cursor-pointer bg-appBlue100/30 backdrop-blur-md transition-all duration-300 lg:-translate-x-full ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        }`}
      />
    </>
  );
};

export default AppNavbar;
