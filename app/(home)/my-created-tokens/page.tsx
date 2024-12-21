import Link from "next/link";
import { JSX } from "react";

import TokenCard from "@/components/common/TokenCard";
import routes from "@/navigation/routes";

const MyCreatedTokensPage = (): JSX.Element => {
  return (
    <ul className="mx-auto grid w-full max-w-[57.563rem] grid-cols-2 gap-x-9 gap-y-10 sm:grid-cols-3 md:gap-x-11 lg:gap-x-14">
      {[...Array(12)]?.map((_, key) => (
        <li className="h-full w-full" key={key}>
          <Link
            href={routes.TOKEN_DETAILS_PAGE(
              "ST1AZR8T82Z7CPJ766TNF1YEQV1C2SXZ9AW3N11V0.Barcelona-Token-3-dex",
            )}
          >
            <TokenCard />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MyCreatedTokensPage;
