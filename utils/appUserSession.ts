import { AppConfig, UserSession } from "@stacks/connect";
import {
  StacksTestnet,
  StacksMocknet,
  StacksMainnet,
} from "@stacks/network-v6";
import systemConfig from "@/utils/appConfig";

const appConfig = new AppConfig(["store_write", "publish_data"]);
export const appUserSession = new UserSession({ appConfig });

const mainnet = new StacksMainnet();
const testnet = new StacksTestnet();
const devnet = new StacksMocknet();

interface NetworkConfig {
  network: StacksMainnet;
  ft_sip_trait_address: string;
}

export const getNetworkConfig = (): NetworkConfig => {
  if (systemConfig?.APP_PUBLIC_NETWORK === "mainnet") {
    return {
      network: mainnet,
      ft_sip_trait_address: "SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE",
    };
  }

  if (systemConfig?.APP_PUBLIC_NETWORK === "testnet") {
    return {
      network: testnet,
      ft_sip_trait_address: "ST2SHP0RSX5ST9HTKJM4JF6SGQ686P4GJGF2XHHTX",
    };
  }

  return {
    network: devnet,
    ft_sip_trait_address: "SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE",
  };
};
