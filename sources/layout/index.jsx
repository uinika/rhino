import React from "react";
import "./style.scss";
import Dashboard from "../dashboard/index.jsx";
import { Route, Link, Switch } from "react-router-dom";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <nav>导航</nav>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}
