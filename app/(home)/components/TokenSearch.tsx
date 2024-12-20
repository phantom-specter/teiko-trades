"use client";

import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { JSX } from "react";
import { useForm } from "react-hook-form";

import ErrorMessage from "@/components/forms/ErrorMessage";
import { BiSearch } from "@/components/icons";

interface Schema {
  searchValue: string;
}

const schema = Joi.object<Schema>({
  searchValue: Joi.string().min(3).max(250).required().label("Search value"),
});

const TokenSearch = (): JSX.Element => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Schema>({
    resolver: joiResolver(schema),
  });

  const onSubmit = handleSubmit(async (formValues) => {
    console.log(formValues);
  });

  return (
    <div className="mx-auto mb-16 mt-7 w-full max-w-[43.106rem]">
      <form
        onSubmit={onSubmit}
        className="flex w-full items-center rounded-lg bg-appLightBlue100 p-1 ring-appBlue200 transition-all duration-300 focus-within:ring-2"
      >
        <input
          type="search"
          placeholder="Search for a token"
          className="block h-10 w-full bg-transparent px-3 outline-none placeholder:text-appGray100"
          {...register("searchValue")}
        />
        <button
          type="submit"
          className="aspect-square rounded-lg bg-appLightBlue200 px-4 text-base md:text-lg lg:text-xl"
        >
          <BiSearch />
        </button>
      </form>

      <ErrorMessage message={errors?.searchValue?.message ?? ""} />
    </div>
  );
};

export default TokenSearch;
