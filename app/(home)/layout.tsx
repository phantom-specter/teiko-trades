import Link from "next/link";

import routes from "@/navigation/routes";
import HomeNav from "./components/HomeNav";
import TokenSearch from "./components/TokenSearch";

export default function HomeLayout({
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
        <HomeNav />
        {children}
      </section>
    </main>
  );
}
