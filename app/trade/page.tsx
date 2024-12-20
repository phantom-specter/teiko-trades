import { JSX } from "react";

import BuyAndSellSection from "./sections/BuyAndSellSection";
import TradeTokenHeader from "./sections/TradeTokenHeader";
import RecentTradesTable from "./sections/RecentTradesTable";

const TradeTokenPage = (): JSX.Element => {
  return (
    <main className="mx-auto max-w-[89.5rem] px-5 pt-28 2xl:px-0">
      <TradeTokenHeader />

      <div className="grid gap-x-2 gap-y-8 pt-3 lg:grid-cols-11">
        <section className="col-span-7 flex flex-col gap-y-6">
          <RecentTradesTable />
        </section>
        <section className="col-span-4 rounded-lg bg-appDarkBlue400 px-4 py-8">
          <BuyAndSellSection />
        </section>
      </div>
    </main>
  );
};

export default TradeTokenPage;
