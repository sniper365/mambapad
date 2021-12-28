import { useCallback } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import { connectorLocalStorageKey } from "../config";
import { injected } from "../utils/web3React";
import { setupNetwork } from "../utils/wallet";


const useAuth = () => {
  const { activate, deactivate } = useWeb3React()

  const login = useCallback(
    () => {
      const connector = injected
      if (connector) { 
        activate(connector, async (error) => {
          if (error instanceof UnsupportedChainIdError) {
            const hasSetup = await setupNetwork()
            if (hasSetup) {
              activate(connector)
              console.info('connector====',connector)
            }            
          } else {
            window.localStorage.removeItem(connectorLocalStorageKey)
            // if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
            //   toastError('Provider Error', 'No provider was found')
            // } else if (
            //   error instanceof UserRejectedRequestErrorInjected ||
            //   error instanceof UserRejectedRequestErrorWalletConnect
            // ) {
            //   if (connector instanceof WalletConnectConnector) {
            //     const walletConnector = connector as WalletConnectConnector
            //     walletConnector.walletConnectProvider = null
            //   }
            //   toastError('Authorization Error', 'Please authorize to access your account')
            // } else {
            //   toastError(error.name, error.message)
            // }
          }
        })
      } else {
        // toastError('Unable to find connector', 'The connector config is wrong')
      }
    },
    [activate],
  )

  const logout = useCallback(() => {
    deactivate()
    // This localStorage key is set by @web3-react/walletconnect-connector
    if (window.localStorage.getItem('walletconnect')) {
      // connectorsByName.walletconnect.close()
      // connectorsByName.walletconnect.walletConnectProvider = null
    }
  }, [deactivate])

  return { login, logout }
}

export default useAuth

