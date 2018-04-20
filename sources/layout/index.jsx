import React from "react";
import "./style.scss";
import { Route, Link, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../common/loading.jsx";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <nav>导航</nav>
        <Switch>
          <Route
            path="/dashboard"
            component={Loadable({
              loader: () => import("../dashboard/index.jsx"),
              loading: Loading
            })}
          />
        </Switch>
      </div>
    );
  }
}
