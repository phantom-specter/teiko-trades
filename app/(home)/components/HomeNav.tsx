"use client";

import { cn } from "@/lib/utils";
import routes from "@/navigation/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

const navs = [
  {
    title: "Overview",
    route: routes.HOME_PAGE,
  },
  {
    title: "My Favourites",
    route: routes.MY_FAVOURITE_TOKENS_PAGE,
  },
  {
    title: "My Created Tokens",
    route: routes.MY_CREATED_TOKENS_PAGE,
  },
];

const HomeNav = (): JSX.Element => {
  const pathName = usePathname();

  return (
    <ul className="mx-auto flex max-w-max items-center gap-2 overscroll-x-auto pb-11">
      {navs?.map(({ route, title }, key) => (
        <li key={key}>
          <Link
            className={cn(
              "block rounded-md border-b-4 border-transparent p-2 font-medium transition-all duration-300 hover:bg-appWhite200/10 sm:text-base",
              pathName === route ? "rounded-b-none border-appYellow300" : "",
            )}
            href={route}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HomeNav;
