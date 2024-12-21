"use client";

import { JSX } from "react";

import { getAllUserBalances } from "@/api/stacks.api";
import TokenCard from "@/components/common/TokenCard";
import { UilCopy } from "@/components/icons";
import { useAuthStore } from "@/stores/auth.store";
import { FungibleToken } from "@/types/api/stacks.types";
import { handleApiErrors } from "@/utils/handleErrors";
import { useQuery } from "@tanstack/react-query";

interface Props {
  dexWalletId: string;
}

function removeDexSuffix(input: string) {
  if (!input) return "";

  if (input.endsWith("-dex")) {
    return input?.slice(0, -4);
  }
  return input;
}

function findValueBySuffix(tokens: FungibleToken, suffix: string): string {
  for (const key in tokens) {
    if (key?.endsWith(suffix)) {
      const balance = tokens[key]?.balance;
      if (isNaN(Number(balance))) return balance;
      return Number(balance)?.toLocaleString(); // Return the value if the key ends with the given suffix
    }
  }
  return "0"; // Return null if no match is found
}

const TradeTokenHeader = ({ dexWalletId }: Props): JSX.Element => {
  console.log(dexWalletId);
  const { loginResponse } = useAuthStore();

  const userAddress = loginResponse?.profile?.stxAddress?.testnet;

  const { data } = useQuery({
    queryKey: ["getAllUserBalances", userAddress],
    queryFn: async () => {
      const response = await getAllUserBalances(userAddress ?? "");
      if (response.ok && response?.data) {
        return response?.data;
      } else {
        handleApiErrors(response);
        return null;
      }
    },
    enabled: !!userAddress,
  });

  const [_, coinName] = dexWalletId?.split(".");

  console.log(_);
  const finalCoinName = removeDexSuffix(coinName);
  return (
    <header className="flex flex-wrap items-center gap-5 rounded-lg bg-appDarkBlue400 px-4 py-6">
      <div className="flex items-center gap-2">
        <TokenCard className="h-20 w-28" />
        <dl>
          <dt className="text-xs text-appGray300">Your Token Balance:</dt>
          <dd className="font-bold sm:text-base">
            {!!data?.fungible_tokens
              ? `${findValueBySuffix(data?.fungible_tokens, finalCoinName) ?? "0"}`
              : "0"}
          </dd>
        </dl>
      </div>
      <div className="max-w-[33rem]">
        <p className="font-medium sm:text-base">Description:</p>
        <p className="text-xs text-appGray300">
          When the token reaches its target revenue of 21k stx locked from
          trading fees, token owners can mint ordinals representing 100,000
          tokens of the supply.
        </p>
        <dl className="flex items-center gap-2">
          <dt className="custom-break-characters flex items-center truncate">
            <span className="pr-1 text-appYellow400">Dex Trx ID:</span>

            <span className="custom-break-characters block">
              ST289JNDWAVEZNBJJRS1P6D3QKFRV5J955GY00DPP.Mikie-Token-Niche-dex
            </span>
          </dt>

          <dd className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-appBlue200 active:scale-95">
            <UilCopy className="text-xl" />
          </dd>
        </dl>
        <dl className="flex items-center gap-2">
          <dt className="custom-break-characters truncate">
            <span className="pr-1 text-appYellow400">Token Trx ID:</span>
            ST289JNDWAVEZNBJJRS1P6D3QKFRV5J955GY00DPP.Mikie-Token-Niche-dex
          </dt>

          <dd className="cursor-pointer transition-all duration-300 hover:scale-105 hover:text-appBlue200 active:scale-95">
            <UilCopy className="text-xl" />
          </dd>
        </dl>
      </div>

      <hr className="h-24 w-px border-0 bg-appLightGray100" />

      <div>
        <p className="text-appGreen200">Market Cap</p>
        <p className="font-bold text-appGreen200 sm:text-base">
          3,200,000 SATs
        </p>
        <p>
          <span className="pr-1 text-appGray300">Created By:</span>
          Teiko CEO
        </p>
        <p>
          <span className="pr-1 text-appGray300">Date Created:</span>
          40 Minutes ago
        </p>
      </div>
    </header>
  );
};

export default TradeTokenHeader;
