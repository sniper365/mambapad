import React from "react";
import ReactDOM from "react-dom";
import { ModalProvider } from "react-simple-modal-provider";
import Modal1 from './components/Modal1';
import Modal2 from './components/Modal2';
import { BrowserRouter as Router } from "react-router-dom";
// import SimpleBar from "simplebar-react";
// import "simplebar/dist/simplebar.min.css";

import "./index.css";
import "./assets/css/bootstrap.min.css";
import App from "./App";
import Providers from "./Providers";
import modals from "./uikit/Modal"

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <ModalProvider value={modals}>
        <App />
      </ModalProvider>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
