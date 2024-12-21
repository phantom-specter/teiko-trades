"use client";

import { getWalletTransactions } from "@/api/stacks.api";
import { formatUAmount } from "@/utils";
import { handleApiErrors } from "@/utils/handleErrors";
import { getRelativeTimePass } from "@/utils/time";
// import { connectWebSocketClient } from "@stacks/blockchain-api-client";
import { useQuery } from "@tanstack/react-query";
import { JSX } from "react";

const headers = ["Date", "Type", "Token Amount", "Transaction ID"];
// const wallet =
//   "ST1AZR8T82Z7CPJ766TNF1YEQV1C2SXZ9AW3N11V0.Michael-Fan-Token-dex";

// const listenToWallet = async () => {
//   const client = await connectWebSocketClient("wss://api.testnet.hiro.so/");

//   console.log("started");
//   const sub = await client.subscribeAddressTransactions(wallet, (event) =>
//     console.log("websocket-event--", event),
//   );

//   // await sub.unsubscribe();
// };

// const manualGetWalletTransactions = async () => {
//   const response = await getWalletTransactions(wallet);
//   console.log({ response });
// };

// const manualGetUserBalance = async (userAddress: string) => {
//   const response = await getUserBalance({
//     contractAddress: "ST1AZR8T82Z7CPJ766TNF1YEQV1C2SXZ9AW3N11V0",
//     contractName: "Michael-Fan-Token",
//     userAddress,
//   });

//   console.log({ response });
// };

// const getTokenDescription = async () => {
//   const response = cvToValue(
//     hexToCV(
//       "0x070a0e0000005868747470733a2f2f676169612e6869726f2e736f2f6875622f314644674c7069417a58576e53446677573343734b4154366f5471374b4259574d712f414d415a4f4e613668746a5956706f494d4936313166383763484377",
//     ),
//   );

//   console.log(response?.value?.value);
// };

interface Props {
  dexWalletId: string;
}

const RecentTradesTable = ({ dexWalletId }: Props): JSX.Element => {
  const id =
    dexWalletId ??
    "ST1AZR8T82Z7CPJ766TNF1YEQV1C2SXZ9AW3N11V0.Barcelona-Token-3-dex";
  const { data, isLoading } = useQuery({
    queryKey: ["getWalletTransactions", id],
    queryFn: async () => {
      const response = await getWalletTransactions(id);
      if (response.ok && response?.data) {
        return response?.data;
      } else {
        handleApiErrors(response);
        return null;
      }
    },
    // enabled: dexWalletId,
  });

  // const { loginResponse } = useAuthStore();
  // const userAddress = loginResponse?.profile?.stxAddress?.testnet;
  // useEffect(() => {
  //   // listenToWallet();
  //   // manualGetWalletTransactions();
  //   getContractInfo(
  //     "ST1AZR8T82Z7CPJ766TNF1YEQV1C2SXZ9AW3N11V0.Barcelona-Token-3",
  //   );
  //   if (userAddress) {
  //     manualGetUserBalance(userAddress);
  //   }
  // }, [userAddress]);

  return (
    <div className="rounded-lg bg-appDarkBlue400">
      <div className="mb-3 mt-4 flex items-center gap-2 p-3 text-xs text-white">
        <span>Trades</span>
      </div>

      <hr className="mb-2" />

      <ul className="grid grid-cols-4 gap-5 bg-appDarkBlue500 px-4 py-2 font-medium">
        {headers?.map((value, key) => <li key={key}>{value}</li>)}
      </ul>

      {isLoading ? (
        <div>
          <p className="text-center">Loading...</p>
        </div>
      ) : !data || data?.results?.length < 1 ? (
        <div className="text-center">No data found for this token.</div>
      ) : (
        <ul>
          {data?.results
            ?.filter(({ tx }) => {
              const functionName =
                tx?.contract_call?.function_name?.toLowerCase();
              return functionName === "buy" || functionName === "sell";
            })
            .map(({ tx }, key) => {
              const time = tx?.burn_block_time_iso;
              const functionName =
                tx?.contract_call?.function_name?.toLowerCase();
              return (
                <li className="grid grid-cols-4 gap-5 px-4 py-2" key={key}>
                  <time dateTime={time}>{getRelativeTimePass(time)}</time>
                  <p
                    className={`${functionName === "sell" ? "text-appRed400" : "text-appGreen200"} capitalize`}
                  >
                    {functionName}
                  </p>

                  <p>
                    {formatUAmount(
                      tx?.contract_call?.function_args?.[0]?.repr ?? "",
                    )}
                  </p>
                  <p className="custom-break-characters truncate">
                    {tx?.tx_id}
                  </p>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};

export default RecentTradesTable;
