import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import "./index.css";
import "./assets/css/bootstrap.min.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <SimpleBar>
      <App />
    </SimpleBar>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();
