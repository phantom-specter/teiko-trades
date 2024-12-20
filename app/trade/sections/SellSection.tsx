"use client";

import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { JSX } from "react";
import { useForm } from "react-hook-form";

import AppInput from "@/components/forms/AppInput";
import LearnMoreSection from "./LearnMoreSection";
import SlippageSection from "./SlippageSection";
import ValuePercentages from "./ValuePercentages";

const isLoading = false;

interface Schema {
  amount: string;
  slippage: string;
}

const schema = Joi.object<Schema>({});

const SellSection = (): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useForm<Schema>({
    resolver: joiResolver(schema),
  });

  return (
    <>
      <p className="py-4 text-end">
        Current Balance: <strong className="font-bold">15,000,000</strong>
      </p>

      <ValuePercentages />

      <AppInput
        hookFormProps={{ ...register("amount") }}
        disabled={isLoading}
        title=""
        rightComponent={<span>$sBTC</span>}
        placeholder="0.0"
        errorMessage={errors?.amount?.message ?? ""}
      />

      <SlippageSection />

      <LearnMoreSection />

      <button
        type="button"
        className="flex w-full items-center justify-center rounded-md bg-appRed300 py-[0.625rem] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        Sell
      </button>
    </>
  );
};

export default SellSection;
