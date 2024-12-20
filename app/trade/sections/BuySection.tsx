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

const BuySection = (): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useForm<Schema>({
    resolver: joiResolver(schema),
  });

  return (
    <>
      <p className="py-4 text-end">
        Current Balance: <strong className="font-bold">0.001 sBTC</strong>
      </p>

      <ValuePercentages />

      <AppInput
        hookFormProps={{ ...register("amount") }}
        disabled={isLoading}
        title=""
        rightComponent={<span>$TEKO</span>}
        placeholder="0.0"
        errorMessage={errors?.amount?.message ?? ""}
      />

      <SlippageSection />

      <LearnMoreSection />

      <button
        type="button"
        className="flex w-full items-center justify-center rounded-md bg-appGreen200 py-[0.625rem] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        Buy
      </button>
    </>
  );
};

export default BuySection;
