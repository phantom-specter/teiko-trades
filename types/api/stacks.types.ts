export interface GetContractDetails {
  tx_id: string;
  canonical: boolean;
  contract_id: string;
  block_height: number;
  clarity_version: number;
  source_code: string;
}

export interface GetTransactionDetails {
  tx_id: string;
  nonce: number;
  fee_rate: string;
  sender_address: string;
  sponsored: boolean;
  post_condition_mode: "allow" | "deny";
  post_conditions: any[]; // Specify a type if post-conditions are structured
  anchor_mode: "on_chain" | "off_chain" | "any";
  block_hash: string;
  block_height: number;
  block_time: number;
  block_time_iso: string;
  burn_block_time: number;
  burn_block_height: number;
  burn_block_time_iso: string;
  parent_burn_block_time: number;
  parent_burn_block_time_iso: string;
  canonical: boolean;
  tx_index: number;
  tx_status: "success" | "abort" | "pending";
  tx_result: TransactionResult;
  event_count: number;
  parent_block_hash: string;
  is_unanchored: boolean;
  microblock_hash: string;
  microblock_sequence: number;
  microblock_canonical: boolean;
  execution_cost_read_count: number;
  execution_cost_read_length: number;
  execution_cost_runtime: number;
  execution_cost_write_count: number;
  execution_cost_write_length: number;
  events: TransactionEvent[];
  tx_type:
    | "contract_call"
    | "smart_contract"
    | "coinbase"
    | "poison_microblock";
  smart_contract?: SmartContractDetails;
}

interface TransactionResult {
  hex: string;
  repr: string;
}

interface TransactionEvent {
  event_index: number;
  event_type: string;
  tx_id: string;
  asset?: FungibleTokenAssetEvent;
}

interface FungibleTokenAssetEvent {
  asset_event_type: "mint" | "burn" | "transfer";
  asset_id: string;
  sender: string;
  recipient: string;
  amount: string;
}

interface SmartContractDetails {
  clarity_version: number;
  contract_id: string;
  source_code: string;
}

// WALLET TRANSACTION TYPES STARTS

type TxResult = {
  hex: string;
  repr: string;
};

type FunctionArg = {
  hex: string;
  repr: string;
  name: string;
  type: string;
};

type ContractCall = {
  contract_id: string;
  function_name: string;
  function_signature: string;
  function_args: FunctionArg[];
};

type SmartContract = {
  clarity_version: number;
  contract_id: string;
  source_code: string;
};

type Tx = {
  tx_id: string;
  nonce: number;
  fee_rate: string;
  sender_address: string;
  sponsored: boolean;
  post_condition_mode: string;
  post_conditions: any[];
  anchor_mode: string;
  block_hash: string;
  block_height: number;
  block_time: number;
  block_time_iso: string;
  burn_block_time: number;
  burn_block_height: number;
  burn_block_time_iso: string;
  parent_burn_block_time: number;
  parent_burn_block_time_iso: string;
  canonical: boolean;
  tx_index: number;
  tx_status: string;
  tx_result: TxResult;
  event_count: number;
  parent_block_hash: string;
  is_unanchored: boolean;
  microblock_hash: string;
  microblock_sequence: number;
  microblock_canonical: boolean;
  execution_cost_read_count: number;
  execution_cost_read_length: number;
  execution_cost_runtime: number;
  execution_cost_write_count: number;
  execution_cost_write_length: number;
  events: any[];
  tx_type: string;
  contract_call?: ContractCall;
  smart_contract?: SmartContract;
};

type Events = {
  stx: {
    transfer: number;
    mint: number;
    burn: number;
  };
  ft: {
    transfer: number;
    mint: number;
    burn: number;
  };
  nft: {
    transfer: number;
    mint: number;
    burn: number;
  };
};

type Result = {
  tx: Tx;
  stx_sent: string;
  stx_received: string;
  events: Events;
};

export interface GetWalletTransactions {
  limit: number;
  offset: number;
  total: number;
  results: Result[];
}

// WALLET TRANSACTION TYPES ENDS

export type TokenInfo = {
  balance: string;
  total_sent: string;
  total_received: string;
};

export type FungibleToken = {
  [key: string]: TokenInfo;
};

type StxInfo = {
  balance: string;
  total_sent: string;
  total_received: string;
  total_fees_sent: string;
  total_miner_rewards_received: string;
  lock_tx_id: string;
  locked: string;
  lock_height: number;
  burnchain_lock_height: number;
  burnchain_unlock_height: number;
  estimated_balance: string;
};

export interface GetAllUserBalances {
  stx: StxInfo;
  fungible_tokens: FungibleToken;
  non_fungible_tokens: Record<string, never>;
}
