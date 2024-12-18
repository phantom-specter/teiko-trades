import Nav from "./Nav";

export default function HowItWorksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="pb-60 pt-40">
      <div className="app-container bg-appDarkBlue200 py-12">
        <article className="mx-auto w-full max-w-[69.875rem] font-baiJamjuree">
          <h1 className="pb-9 text-center text-lg font-bold md:text-xl lg:text-2xl">
            HOW IT WORKS
          </h1>

          <h2 className="text-sm md:text-base lg:text-lg">
            Teiko Tokens discourage dumps by making sure that all created tokens
            backed by trading fee revenue locked in smart contracts on-chain.
            Each Teiko Token is
            <span className="px-1 text-appGreen100">backed by trading fee</span>
            revenue incentive's token holders to
            <span className="px-1 text-appBlue200">HODL</span>
            and not
            <span className="pl-1 text-appRed100">DUMP</span>.
          </h2>
          <Nav />
          {children}
        </article>
      </div>
    </main>
  );
}
