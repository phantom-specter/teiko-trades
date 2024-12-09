import Nav from "./Nav";

export default function HowItWorksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="pb-60 pt-12">
      <div className="app-container bg-appDarkBlue200 py-12">
        <article className="mx-auto w-full max-w-[69.875rem] font-baiJamjuree">
          <h1 className="pb-9 text-center text-xl font-bold md:text-2xl lg:text-3xl">
            HOW IT WORKS
          </h1>

          <h2 className="text-base md:text-lg lg:text-xl">
            Teiko Tokens discourage dumps by making sure that all created tokens
            backed by trading fee revenue locked in smart contracts on-chain.
            Each Teiko Token is
            <span className="text-appGreen100 px-1">backed by trading fee</span>
            revenue incentive's token holders to
            <span className="text-appBlue200 px-1">HODL</span>
            and not
            <span className="text-appRed100 pl-1">DUMP</span>.
          </h2>
          <Nav />
          {children}
        </article>
      </div>
    </main>
  );
}
