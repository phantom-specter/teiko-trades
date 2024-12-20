"use client";

import { IconamoonSwap } from "@/components/icons";
import routes from "@/navigation/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const data = [
  {
    title: " Create a Token",
    route: routes.HOW_IT_WORKS_PAGE,
  },
  {
    title: "Trade a Token",
    route: routes.HOW_TO_TRADE_A_TOKEN_PAGE,
  },
];

const Nav = () => {
  const pathName = usePathname();

  return (
    <ul className="flex flex-wrap items-center justify-center gap-6 py-20">
      {data?.map(({ route, title }, key) => (
        <li className="flex items-center gap-6" key={key}>
          <Link
            href={route}
            className={`flex w-full max-w-[23rem] items-center justify-center rounded-3xl border-4 bg-appBlue300 p-5 text-sm font-bold transition-all duration-300 md:text-base lg:text-lg ${pathName === route ? "border-appYellow300" : "border-transparent"}`}
          >
            {title}
          </Link>

          {key === 0 && (
            <span className="flex size-12 shrink-0 rotate-90 items-center justify-center rounded-full border border-appDarkBlue300 bg-appBlue400 text-2xl md:size-14 md:text-3xl lg:size-16 lg:text-4xl">
              <IconamoonSwap />
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Nav;
