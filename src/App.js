import React from "react";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
// import ReactGA from 'react-ga';
import ScrollRestoration from "react-scroll-restoration";

import history from "./routerHistory";
import "./App.css";
import "./assets/css/bootstrap.min.css";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Staking from "./pages/Staking";
import Vesting from "./pages/Vesting";
import ApplyIDO from "./pages/ApplyIDO";
import useEagerConnect from "./hooks/useEagerConnnect";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: smooth;
  }
`;

export const ScrollTop = ({ children, location }) => {
  console.info("Scrolltoppppp", children.props, location);
  React.useEffect(() => window.scrollTo(0, 0), [location]);
  return children;
};

// function usePageView() {
//   let location = useLocation;
//   React.useEffect(() => {
//     ReactGA.send(["pageview", location.pathname]);
//   }, [location]);
// }

const App = () => {
  // usePageView();
  useEagerConnect();
  return (
    <Router history={history}>      
      {/* <GlobalStyles/> */}
      <ScrollRestoration />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects/" component={Projects} />
        <Route exact path="/staking/" component={Staking} />
        <Route exact path="/vesting/" component={Vesting} />
        <Route exact path="/applyido/" component={ApplyIDO} />
      </Switch>
    </Router>
  );
};

export default App;
