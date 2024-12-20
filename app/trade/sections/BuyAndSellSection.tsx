"use client";

import AppInput from "@/components/forms/AppInput";
import { IcTwotoneInfo } from "@/components/icons";
import { cn } from "@/lib/utils";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { JSX, useState } from "react";
import { useForm } from "react-hook-form";

const actions = ["Buy", "Sell"];

const percentages = [25, 50, 75, 100];

const isLoading = false;

interface Schema {
  amount: string;
  slippage: string;
}

const schema = Joi.object<Schema>({});

const BuyAndSellSection = (): JSX.Element => {
  const [activeAction, setActiveAction] = useState(actions?.[0]);

  const {
    register,
    formState: { errors },
  } = useForm<Schema>({
    resolver: joiResolver(schema),
  });

  return (
    <>
      <div className="flex items-center gap-2">
        {actions?.map((value, key) => (
          <button
            key={key}
            onClick={() => setActiveAction(value)}
            type="button"
            className={cn(
              "flex-1 rounded-md bg-appDarkBlue200 py-[0.625rem] text-white transition-all duration-300 hover:scale-105 active:scale-95",
              activeAction === value && "bg-appGreen200",
            )}
          >
            {value}
          </button>
        ))}
      </div>

      <p className="py-4 text-end">
        Current Balance: <strong className="font-bold">15,000,000</strong>
      </p>

      <ul className="mb-1 flex items-center justify-end gap-2">
        {percentages?.map((value, key) => (
          <li
            key={key}
            className="w-full max-w-[4.563rem] cursor-pointer rounded-lg border border-appYellow500 py-[0.625rem] text-center text-xs font-bold text-appYellow500 transition-all duration-300 hover:bg-appYellow500 hover:text-appDarkBlue400"
          >
            {`${value}%`}
          </li>
        ))}
      </ul>

      <AppInput
        hookFormProps={{ ...register("amount") }}
        disabled={isLoading}
        title=""
        rightComponent={<span>$TEKO</span>}
        placeholder="0.0"
        errorMessage={errors?.amount?.message ?? ""}
      />

      <ul className="my-3 flex items-center justify-end gap-2">
        {percentages?.map((_, key) => (
          <li
            key={key}
            className="w-full max-w-[4.563rem] cursor-pointer rounded-lg border border-appYellow500 py-[0.625rem] text-center text-xs font-bold text-appYellow500 transition-all duration-300 hover:bg-appYellow500 hover:text-appDarkBlue400"
          >
            ?
          </li>
        ))}
      </ul>

      <dl className="mb-3 flex items-center">
        <p className="text-xs">
          An estimated fee of 2.1% will be charged for trading fee.
        </p>
        <button
          type="button"
          className="flex shrink-0 items-center gap-1 rounded-lg bg-appYellow600 p-2"
        >
          <IcTwotoneInfo className="text-base text-appYellow400" />
          <span>Learn More</span>
        </button>
      </dl>

      <button
        type="button"
        className="flex w-full items-center justify-center rounded-md bg-appGreen200 py-[0.625rem] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        Buy
      </button>
    </>
  );
};

export default BuyAndSellSection;
