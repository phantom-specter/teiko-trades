import {
  ContractDeployRegularOptions,
  ContractDeploySponsoredOptions,
  openContractDeploy,
} from "@stacks/connect";
import { AnchorMode, ContractDeployOptions } from "@stacks/transactions";
import { getNetworkConfig } from "./appUserSession";
import { formatToken } from "./contracts/formatToken";
import { formatDexV2 } from "./contracts/dex-v2";

export const { ft_sip_trait_address, network } = getNetworkConfig();
export const maxSupply = 2100000000000000;
export const initialPrice = 100000000;

interface TokenProps {
  name: string;
  tokenURI: string;
  tokenSymbol: string;
  userWalletAddress: string;
}

export const deployToken = async (
  prop: TokenProps,
  onError: (error: unknown) => void,
  onSuccess: (txid: string) => void,
) => {
  const txOptions:
    | ContractDeployOptions
    | ContractDeployRegularOptions
    | ContractDeploySponsoredOptions = {
    contractName: prop?.name?.trim()?.replace(/ /g, "-")?.replace(/_/g, "-"),
    codeBody: formatToken(prop),
    network,
    // appDetails: {
    //   name: "My App",
    //   icon: window.location.origin + "/my-app-logo.svg",
    // },

    anchorMode: AnchorMode.Any,
    onFinish: (data) => {
      onSuccess(data?.txId);
    },
  };
  try {
    await openContractDeploy(txOptions);
  } catch (error) {
    onError(error);
  }
};

export const getTokenVariableName = (name: string) =>
  name?.trim()?.replace(/ /g, "-");

export interface GenerateTokenDexAddressProps {
  userWalletAddress: string;
  name: string;
}
export const generateTokenDexAddress = (
  props: GenerateTokenDexAddressProps,
) => {
  const { userWalletAddress, name } = props;
  return `'${userWalletAddress}.${getTokenVariableName(name)}-dex`;
};

export const deployDex = async (
  prop: { name: string; userWallet: string },
  onError: (error: unknown) => void,
  onSuccess: (txid: string) => void,
) => {
  const { userWallet, name } = prop;

  const codeBody = formatDexV2({
    allowedToken: generateTokenDexAddress({
      name,
      userWalletAddress: userWallet,
    }),
  });

  const txOptions:
    | ContractDeployOptions
    | ContractDeployRegularOptions
    | ContractDeploySponsoredOptions = {
    contractName: `${getTokenVariableName(name)}-dex`,
    codeBody,
    network,
    // appDetails: {
    //   name: "My App",
    //   icon: window.location.origin + "/my-app-logo.svg",
    // },

    anchorMode: AnchorMode.Any,
    onFinish: (data) => {
      onSuccess(data?.txId);
    },
  };
  try {
    await openContractDeploy(txOptions);
  } catch (error) {
    onError(error);
  }
};
