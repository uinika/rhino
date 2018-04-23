import { HashRouter, Route, Link, Switch } from "react-router-dom";
import React from "react";
import Loadable from "react-loadable";
import Loading from "./common/loading";
import { hot } from "react-hot-loader";


const Login = Loadable({
  loader: () => import("./login/index.jsx"),
  loading: Loading
});

export default hot(module)(() => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/login" component={Login} />
      <Route
        path="/layout"
        component={Loadable({
          loader: () => import("./layout/index.jsx"),
          loading: Loading
        })}
      />
    </Switch>
  </HashRouter>
));
