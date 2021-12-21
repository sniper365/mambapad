import { useMemo } from "react";
import {ethers} from "ethers";
// import { Address } from "config/types";
import { ChainId } from "../config";
import addresses from '../config/contracts'
import useActiveWeb3React from "../hooks/useActiveWeb3React";
import leosAbi from '../config/abis/leosToken.json'
// import leosStakingAbi from '../config/abis/leosStaking.json'
import MultiCallAbi from '../config/abis/multicall.json'
import {simpleRpcProvider} from "./provider";


export const getAddress = (address) => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  return address[chainId] ? address[chainId] : address[ChainId.MAINNET]
}

export const getLeosAddress = () => {
 return getAddress(addresses.leos)
}

export const getLeosStakingAddress = () =>{
  return getAddress(addresses.staking)
}

export const getMulticallAddress = () => {
  return getAddress(addresses.multiCall)
}


const getContract = (abi, address, signer) => {
  const signerOrProvider = signer ?? simpleRpcProvider
  return new ethers.Contract(address, abi, signerOrProvider)
}

export const getLeosContract = (signer) => {
  return getContract(leosAbi, getLeosAddress(), signer)
}
// export const getLeosStakingContract = (signer) => {
//   return getContract(leosStakingAbi, getLeosStakingAddress(), signer)
// }

export const getMulticallContract = (signer) => {
  return getContract(MultiCallAbi, getMulticallAddress(), signer)
}

export const useLeosContract = () => {
  const { library } = useActiveWeb3React()
  return useMemo(() => getLeosContract(library.getSigner()), [library])
}

// export const useLeosStakingContract = () => {
//   const { library } = useActiveWeb3React()
//   return useMemo(() => getLeosStakingContract(library.getSigner()), [library])
// }

