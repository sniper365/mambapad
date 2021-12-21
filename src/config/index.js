import BigNumber from "bignumber.js/bignumber";
import { BIG_TEN } from "../utils/bigNumber";

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});

export const ChainId = {
  MAINNET: 56,
  TESTNET: 97,
};

export const LEOS_DECIMAL = 8;
export const BSC_BLOCK_TIME = 3;
export const BASE_BSC_SCAN_URLS = {
  [ChainId.MAINNET]: "https://bscscan.com",
  [ChainId.TESTNET]: "https://testnet.bscscan.com",
};

export const BASE_URL = "https://leonicornswap.com";
export const BASE_BSC_SCAN_URL =
  BASE_BSC_SCAN_URLS[process.env.REACT_APP_CHAIN_ID];
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(LEOS_DECIMAL);
export const DEFAULT_GAS_LIMIT = 200000;
export const DEFAULT_GAS_PRICE = 5;

export const connectorLocalStorageKey = 'injected';