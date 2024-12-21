import { io } from "socket.io-client";
import * as stacks from "@stacks/blockchain-api-client";

const socketUrl = "https://api.testnet.hiro.so/";

const socket = io(socketUrl, {
  transports: ["websocket"],
});
export const sc = new stacks.StacksApiSocketClient(socket);
