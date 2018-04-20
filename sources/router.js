import { Route, Link, Switch } from "react-router-dom";
import React from "react";
import Layout from "./layout/index.jsx";
import Loadable from "react-loadable";
import Loading from "./common/loading.jsx";
import "antd/dist/antd.css";

export default () => (
  <div>
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
      <Route path="/layout" component={Layout} />
    </Switch>
  </div>
);
