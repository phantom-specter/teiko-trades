import { JSX } from "react";

import BuyAndSellSection from "./sections/BuyAndSellSection";
import TradeTokenHeader from "./sections/TradeTokenHeader";

const TradeTokenPage = (): JSX.Element => {
  return (
    <main className="mx-auto max-w-[89.5rem] px-5 pt-28 2xl:px-0">
      <TradeTokenHeader />

      <div className="grid grid-cols-11 gap-x-2 gap-y-8 pt-3">
        <section className="col-span-7"></section>
        <section className="bg-appDarkBlue400 col-span-4 rounded-lg px-4 py-8">
          <BuyAndSellSection />
        </section>
      </div>
    </main>
  );
};

export default TradeTokenPage;
