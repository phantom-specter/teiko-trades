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
    route: routes.TRADE_A_TOKEN_PAGE,
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
            className={`bg-appBlue300 flex w-full max-w-[23rem] items-center justify-center rounded-3xl border-4 p-5 text-base font-bold transition-all duration-300 md:text-lg lg:text-xl ${pathName === route ? "border-appYellow300" : "border-transparent"}`}
          >
            {title}
          </Link>

          {key === 0 && (
            <span className="bg-appBlue400 border-appDarkBlue300 flex size-14 shrink-0 rotate-90 items-center justify-center rounded-full border text-3xl md:size-16 md:text-4xl lg:size-20 lg:text-5xl">
              <IconamoonSwap />
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Nav;
