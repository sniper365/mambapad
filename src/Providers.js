import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { Provider } from "react-redux";
import { getLibrary } from './utils/web3React';
// import { ToastsProvider } from "./contexts/ToastsContext";
import { RefreshContextProvider } from './contexts/RefreshContext';
import store from "./redux/store";

const Providers = ({children}) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        {/* <ToastsProvider> */}
          <RefreshContextProvider>{children}</RefreshContextProvider>
        {/* </ToastsProvider> */}
      </Provider>
    </Web3ReactProvider>
  );
};
export default Providers;
