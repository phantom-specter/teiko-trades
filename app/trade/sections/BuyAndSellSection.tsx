"use client";

import AppTabs from "@/components/common/AppTabs";
import { cn } from "@/lib/utils";
import { JSX, useState } from "react";
import BuySection from "./BuySection";
import SellSection from "./SellSection";

const actions = ["Buy", "Sell"];

const BuyAndSellSection = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="flex items-center gap-2">
        {actions?.map((value, key) => (
          <button
            key={key}
            onClick={() => setActiveIndex(key)}
            type="button"
            className={cn(
              "flex-1 rounded-md bg-appDarkBlue200 py-[0.625rem] text-white transition-all duration-300 hover:scale-105 active:scale-95",
              actions?.[activeIndex] === value && "bg-appGreen200",
            )}
          >
            {value}
          </button>
        ))}
      </div>

      <AppTabs
        activeIndex={activeIndex}
        components={[<BuySection key={1} />, <SellSection key={2} />]}
      />
    </>
  );
};

export default BuyAndSellSection;
