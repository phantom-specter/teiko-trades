import Link from "next/link";

import TokenCard from "@/components/common/TokenCard";
import routes from "@/navigation/routes";
import TokenSearch from "./components/TokenSearch";

export default function HowItWorksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="px-5 pb-16 pt-40">
      <Link
        className="mx-auto block max-w-[15.188rem] rounded-lg bg-appYellow100 p-3 text-center font-baiJamjuree font-bold text-appBlue100 transition-all duration-300 hover:scale-105 active:scale-95"
        href={routes.CREATE_TOKEN_PAGE}
      >
        CREATE TOKEN
      </Link>

      <TokenSearch />
      <section className="mx-auto max-w-[72.188rem] rounded-xl bg-appLightBlue100 px-5 py-10 lg:px-0">
        <ul className="mx-auto grid w-full max-w-[57.563rem] grid-cols-2 gap-x-9 gap-y-10 sm:grid-cols-3 md:gap-x-11 lg:gap-x-14">
          {[...Array(12)]?.map((_, key) => (
            <li className="h-full w-full" key={key}>
              <Link href={routes.TOKEN_DETAILS_PAGE}>
                <TokenCard />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {children}
    </main>
  );
}
