import { JSX } from "react";

import TokenCard from "@/components/common/TokenCard";
import { UilCopy } from "@/components/icons";

const TradeTokenHeader = (): JSX.Element => {
  return (
    <header className="bg-appDarkBlue400 flex flex-wrap items-center gap-5 rounded-lg px-4 py-6">
      <div className="flex items-center gap-2">
        <TokenCard className="h-20 w-28" />
        <dl>
          <dt className="text-appGray300 text-xs">Your Token Balance:</dt>
          <dd className="font-bold sm:text-base">15,000,000</dd>
        </dl>
      </div>
      <div className="max-w-[33rem]">
        <p className="font-medium sm:text-base">Description:</p>
        <p className="text-appGray300 text-xs">
          When the token reaches its target revenue of 21k stx locked from
          trading fees, token owners can mint ordinals representing 100,000
          tokens of the supply.
        </p>
        <dl className="flex items-center gap-2">
          <dt className="custom-break-characters truncate">
            <span className="text-appYellow400 pr-1">Dex Trx ID:</span>
            ST289JNDWAVEZNBJJRS1P6D3QKFRV5J955GY00DPP.Mikie-Token-Niche-dex
          </dt>

          <dd className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-appBlue200 active:scale-95">
            <UilCopy className="text-xl" />
          </dd>
        </dl>
        <dl className="flex items-center gap-2">
          <dt className="custom-break-characters truncate">
            <span className="text-appYellow400 pr-1">Token Trx ID:</span>
            ST289JNDWAVEZNBJJRS1P6D3QKFRV5J955GY00DPP.Mikie-Token-Niche-dex
          </dt>

          <dd className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-appBlue200 active:scale-95">
            <UilCopy className="text-xl" />
          </dd>
        </dl>
      </div>

      <hr className="bg-appLightGray100 h-24 w-px border-0" />

      <div>
        <p className="text-appGreen200">Market Cap</p>
        <p className="text-appGreen200 font-bold sm:text-base">
          3,200,000 SATs
        </p>
        <p>
          <span className="text-appGray300 pr-1">Created By:</span>
          Teiko CEO
        </p>
        <p>
          <span className="text-appGray300 pr-1">Date Created:</span>
          40 Minutes ago
        </p>
      </div>
    </header>
  );
};

export default TradeTokenHeader;
