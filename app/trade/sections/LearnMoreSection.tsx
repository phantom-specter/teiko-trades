import { JSX } from "react";

import { IcTwotoneInfo } from "@/components/icons";

const LearnMoreSection = (): JSX.Element => {
  return (
    <dl className="mb-3 flex w-full items-center justify-between gap-2">
      <p className="text-xs text-appYellow400">
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
  );
};

export default LearnMoreSection;
