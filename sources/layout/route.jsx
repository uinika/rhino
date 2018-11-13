import React from "react";
import "./style.scss";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../common/components/loading";
import { Layout } from "antd";
import Auth from "../common/utils/auth";

const { Content } = Layout;
const AuthRoute = Auth.authRoute;

export default class GlobalLayoutRoute extends React.Component {
  render() {
    return (
      <Content className="content">
        <Switch>
          <AuthRoute
            path="/layout/dashboard"
            component={Loadable({
              loader: () => import("../dashboard"),
              loading: Loading
            })}
          />
          <AuthRoute
            path="/layout/demo"
            component={Loadable({
              loader: () => import("../demo"),
              loading: Loading
            })}
          />
        </Switch>
      </Content>
    );
  }
}
