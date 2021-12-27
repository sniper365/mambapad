import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { Provider } from "react-redux";
import { getLibrary } from "./utils/web3React";
// import { ToastProvider, useToasts } from "./contexts/ToastProvider/ToastProvider";
import { RefreshContextProvider } from "./contexts/RefreshContext";
import { ToastContainer, Slide } from "react-toastify";
import "./contexts/ReactToastify.css";
import store from "./redux/store";

const Providers = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <ToastContainer
          position="bottom-right"
          theme="custom"
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Slide}
        />
          <RefreshContextProvider>{children}</RefreshContextProvider>
      </Provider>
    </Web3ReactProvider>
  );
};
export default Providers;
