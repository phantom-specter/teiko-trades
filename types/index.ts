export interface UserData {
  profile: {
    "@type": string;
    "@context": string;
    apps: {
      "https://stacks-react.vercel.app": string;
      "https://explorer.hiro.so": string;
      "https://platform.hiro.so": string;
      "http://localhost:5173": string;
    };
    appsMeta: {
      "https://stacks-react.vercel.app": {
        storage: string;
        publicKey: string;
      };
      "https://explorer.hiro.so": {
        storage: string;
        publicKey: string;
      };
      "https://platform.hiro.so": {
        storage: string;
        publicKey: string;
      };
      "http://localhost:5173": {
        storage: string;
        publicKey: string;
      };
    };
    stxAddress: {
      testnet: string;
      mainnet: string;
    };
    btcAddress: {
      p2tr: {
        mainnet: string;
        testnet: string;
        regtest: string;
        signet: string;
      };
      p2wpkh: {
        mainnet: string;
        testnet: string;
        regtest: string;
        signet: string;
      };
    };
    btcPublicKey: {
      p2tr: string;
      p2wpkh: string;
    };
    btcPublicKeyTestnet: {
      p2tr: string;
      p2wpkh: string;
    };
    walletProvider: string;
  };
  email?: string;
  decentralizedID: string;
  identityAddress: string;
  appPrivateKey: string;
  coreSessionToken: string | null;
  authResponseToken: string;
  hubUrl: string;
  appPrivateKeyFromWalletSalt: string | null;
  coreNode: string | null;
  gaiaAssociationToken: string;
}
