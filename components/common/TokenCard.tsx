import { JSX } from "react";

import { OrdinalIcon } from "../icons/custom";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

const TokenCard = ({ className }: Props): JSX.Element => {
  return (
    <div
      className={cn(
        "token-card-bg-gradient flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-appYellow300 font-bold sm:text-base",
        className,
      )}
    >
      <OrdinalIcon />
      <p>$TEKO</p>
    </div>
  );
};

export default TokenCard;
