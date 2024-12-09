"use client";

import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { useForm } from "react-hook-form";

import AppInput from "@/components/forms/AppInput";
import AppTextAreaInput from "@/components/forms/AppTextAreaInput";
import { OouiCollapse, OuiMlCreatePopulationJob } from "@/components/icons";
import { useState } from "react";
import AppCollapse from "@/components/AppCollapse";
import { appToast } from "@/utils/appToast";
import { useAuthenticate } from "@/hooks/useAuthenticate";
import { saveMetaData } from "@/utils/storage";
import { isValidTokenName } from "@/utils";
import { deployDex, deployToken } from "@/utils/deployToken";

interface Schema {
  name: string;
  ticker: string;
  twitter?: string;
  website?: string;
  discord?: string;
  facebook?: string;
  telegram?: string;
  uploadedImageURL?: string;
  description?: string;
}

const schema = Joi.object<Schema>({
  description: Joi.string().min(8).max(250).optional().allow(""),
  discord: Joi.string().min(5).max(250).optional().allow(""),
  telegram: Joi.string().min(5).max(250).optional().allow(""),
  facebook: Joi.string().min(5).max(250).optional().allow(""),
  uploadedImageURL: Joi.string().min(1).optional().allow(""),
  name: Joi.string().required().min(3).max(100),
  ticker: Joi.string().required().min(2).max(7),
  twitter: Joi.string().min(5).max(250).optional().allow("").label("X"),
  website: Joi.string().min(5).max(250).optional().allow(""),
});

const CreateTokenForm = () => {
  const [isShown, setIsShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { Login, isLoggedIn, loginResponse } = useAuthenticate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Schema>({
    resolver: joiResolver(schema),
  });

  const onSubmit = handleSubmit(async (formValues) => {
    const {
      name,
      ticker,
      description,
      discord,
      telegram,
      twitter,
      facebook,
      website,
    } = formValues;

    if (!loginResponse?.profile?.stxAddress?.testnet)
      return appToast.Warning("Invalid stx address.");

    const checkTokenName = isValidTokenName(name);

    if (!checkTokenName?.status) return appToast?.Warning(checkTokenName?.data);

    setIsLoading(true);
    // const imageUploadRes = await uploadImageToFirebase(image);
    // if (imageUploadRes?.status) {
    //   appToast.Success("Image uploaded successfully");

    const gaiaRes = await saveMetaData({
      description,
      facebook,
      name,
      discord,
      homepage: website,
      telegram,
      xlink: twitter,
    });

    if (gaiaRes) {
      appToast.Success("Token details uploaded successfully.");

      await deployToken(
        {
          name,
          tokenSymbol: ticker,
          tokenURI: gaiaRes,
          userWalletAddress: loginResponse?.profile?.stxAddress?.testnet,
        },
        (error) => {
          appToast.Error(JSON.stringify(error, undefined, 3));
        },
        (txid) => {
          // if (txid) setTransactionId(txid);
          appToast.Success(
            "Token created succesfully. Here is the id: " + txid,
          );
        },
      );

      await deployDex(
        {
          name,
          userWallet: loginResponse?.profile?.stxAddress?.testnet,
        },
        (error) => {
          appToast.Error(JSON.stringify(error, undefined, 3));
        },
        (txid) => {
          // if (txid) setDexTXID(txid);
          appToast.Success("Dex created succesfully. Here is the id: " + txid);
        },
      );

      setIsLoading(false);
    } else {
      setIsLoading(false);
      appToast.Error("An error occured while uploading token metadata");
    }
    // } else {
    //   appToast?.Error(imageUploadRes?.data);
    //   setIsLoading(false);
    // }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto flex max-w-[40.063rem] flex-col gap-y-4"
    >
      <AppInput
        hookFormProps={{ ...register("name") }}
        disabled={isLoading}
        title="Token Name"
        placeholder="Enter name"
        errorMessage={errors?.name?.message ?? ""}
      />
      <AppInput
        hookFormProps={{ ...register("ticker") }}
        disabled={isLoading}
        title="Ticker"
        placeholder="i.e TEKO"
        errorMessage={errors?.ticker?.message ?? ""}
      />
      <AppTextAreaInput
        hookFormProps={{ ...register("description") }}
        disabled={isLoading}
        title="Description"
        placeholder="i.e Description of token"
        errorMessage={errors?.description?.message ?? ""}
      />

      <div className="flex flex-wrap items-center justify-between gap-5">
        <p className="font-bold text-appGray100">Add Social Media Links </p>

        <button
          onClick={() => setIsShown((value) => !value)}
          className="flex items-center gap-2 font-bold text-appGray100 transition-all duration-300 hover:text-appYellow100"
          type="button"
        >
          <span>{!isShown ? "Show" : "Hide"} </span>
          <OouiCollapse
            className={`transition-all duration-300 ${!isShown ? "rotate-180" : ""}`}
          />
        </button>
      </div>

      <AppCollapse isVisible={isShown}>
        <div className="flex flex-col gap-y-4">
          <AppInput
            hookFormProps={{ ...register("twitter") }}
            disabled={isLoading}
            title="X Link"
            placeholder="(Optional)"
            errorMessage={errors?.twitter?.message ?? ""}
          />
          <AppInput
            hookFormProps={{ ...register("facebook") }}
            disabled={isLoading}
            title="Facebook Link"
            placeholder="(Optional)"
            errorMessage={errors?.facebook?.message ?? ""}
          />
          <AppInput
            hookFormProps={{ ...register("telegram") }}
            disabled={isLoading}
            title="Telegram Link"
            placeholder="(Optional)"
            errorMessage={errors?.telegram?.message ?? ""}
          />
          <AppInput
            hookFormProps={{ ...register("discord") }}
            disabled={isLoading}
            title="Discord Link"
            placeholder="(Optional)"
            errorMessage={errors?.discord?.message ?? ""}
          />
          <AppInput
            hookFormProps={{ ...register("website") }}
            disabled={isLoading}
            title="Website Link"
            placeholder="(Optional)"
            errorMessage={errors?.website?.message ?? ""}
          />
        </div>
      </AppCollapse>

      <button className="mx-auto flex w-full max-w-[17.438rem] items-center justify-center gap-2 rounded-lg bg-appYellow200 py-4 font-bold transition-all duration-300 hover:scale-105 hover:bg-appYellow100 active:scale-95">
        <span>Create coin</span>
        <OuiMlCreatePopulationJob />
      </button>
    </form>
  );
};

export default CreateTokenForm;
