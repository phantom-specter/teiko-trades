import BuyAndSellSection from "../sections/BuyAndSellSection";
import RecentTradesTable from "../sections/RecentTradesTable";
import TradeTokenHeader from "../sections/TradeTokenHeader";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <main className="mx-auto max-w-[89.5rem] px-5 pt-28 2xl:px-0">
      <TradeTokenHeader dexWalletId={id} />

      <div className="grid gap-x-2 gap-y-8 pt-3 lg:grid-cols-11">
        <section className="col-span-7 flex flex-col gap-y-6">
          <RecentTradesTable dexWalletId={id} />
        </section>
        <section className="col-span-4 rounded-lg bg-appDarkBlue400 px-4 py-8">
          <BuyAndSellSection />
        </section>
      </div>
    </main>
  );
}
