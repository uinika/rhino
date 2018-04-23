import { HashRouter, Route, Link, Switch } from "react-router-dom";
import React from "react";
import Loadable from "react-loadable";
import Loading from "./common/loading";
import "antd/dist/antd.css";
import { hot } from "react-hot-loader";

export default hot(module)(() => (
  <HashRouter>
    <Switch>
      <Route
        exact
        path="/"
        component={Loadable({
          loader: () => import("./login/index.jsx"),
          loading: Loading
        })}
      />
      <Route
        path="/login"
        component={Loadable({
          loader: () => import("./login/index.jsx"),
          loading: Loading
        })}
      />
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
