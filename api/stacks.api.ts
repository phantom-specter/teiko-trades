import { baseApi } from "./base.api";

import {
  GetAllUserBalances,
  GetContractDetails,
  GetTransactionDetails,
  GetWalletTransactions,
} from "@/types/api/stacks.types";

export const getContractInfo = (id: string) =>
  baseApi.get<GetContractDetails>(`/v1/contract/${id}`);

export const getTransactionDetails = (txId: string) =>
  baseApi.get<GetTransactionDetails>(`/v1/tx/${txId}`);

export const getWalletTransactions = (wallet: string) =>
  baseApi.get<GetWalletTransactions>(`/v2/addresses/${wallet}/transactions`);

interface GetUserBalance {
  contractAddress: string;
  contractName: string;
  userAddress: string;
}

export const getUserBalance = (props: GetUserBalance) => {
  const { contractAddress, contractName, userAddress } = props;

  return baseApi.post(
    `/v2/contracts/call-read/${contractAddress}/${contractName}/get-balance`,
    {
      sender: userAddress,
      arguments: [userAddress],
    },
  );
};
export const getTokenMetaData = (props: GetUserBalance) => {
  const { contractAddress, contractName, userAddress } = props;

  return baseApi.post(
    `/v2/contracts/call-read/${contractAddress}/${contractName}/get-balance`,
    {
      sender: userAddress,
      arguments: [userAddress],
    },
  );
};

export const getAllUserBalances = (address: string) =>
  baseApi.get<GetAllUserBalances>(`/v1/address/${address}/balances`);
