import { Route, Link, Switch } from "react-router-dom";
import React from "react";
import Login from "./login/index.jsx";
import Layout from "./layout/index.jsx";
import Dashboard from "./dashboard/index.jsx";

export default () => (
  <div>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route exact path="/layout" component={Layout} />
      <Route path="/layout/dashboard" component={Dashboard} />
    </Switch>
  </div>
);
