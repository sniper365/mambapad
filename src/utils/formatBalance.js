import BigNumber from "bignumber.js";
import { ethers } from "ethers";

import getNodeUrl from './getRpcUrl'
// import { formatUnits } from "ethers/lib/utils";
// import { getLanguageCodeFromLS } from "contexts/Localization/helpers";
// import { BIG_TEN } from './bigNumber'

/**
 * Take a formatted amount, e.g. 15 BNB and convert it to full decimal value, e.g. 15000000000000000
 */



export const BIG_TEN = new BigNumber(10);
export const getDecimalAmount = (amount, decimals) => {
  return new BigNumber(amount).times(BIG_TEN.pow(decimals));
};

export const getBalanceAmount = (amount, decimals) => {
  return new BigNumber(amount).dividedBy(BIG_TEN.pow(decimals));
};

export const customProvider = (signer) => {
  return signer || new ethers.providers.StaticJsonRpcProvider(getNodeUrl())
}