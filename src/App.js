import { Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import "./App.css";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Staking from "./pages/Staking";
import Vesting from "./pages/Vesting";
import ApplyIDO from "./pages/ApplyIDO";

function App() {
  return (
    <Provider store={store}>
      <SimpleBar style={{maxheight:400}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects/" component={Projects} />
          <Route exact path="/staking/" component={Staking} />
          <Route exact path="/vesting/" component={Vesting} />
          <Route exact path="/applyido/" component={ApplyIDO} />
        </Switch>
      </SimpleBar>
    </Provider>
  );
}

export default App;
