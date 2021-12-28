import React from "react";
import ReactDOM from "react-dom";
import { ModalProvider } from "./contexts/modalContext";

import "./index.css";
import "./assets/css/bootstrap.min.css";
import App from "./App";
import Providers from "./Providers";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
