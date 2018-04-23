import React from "react";
import "./style.scss";
import { Route, Link, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../common/loading";
import { Layout, Menu } from "antd";

const { Header, Content, Sider } = Layout;

export default class GlobalLayout extends React.Component {
  render() {
    return (
      <Layout id="layout">
        <Header>
          <h1 className="logo">虚拟车钥匙管理系统</h1>
          <Menu className="menu" theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} >
            <Menu.Item key="1">钥匙管理</Menu.Item>
            <Menu.Item key="2">车辆管理</Menu.Item>
            <Menu.Item key="3">用户管理</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>
            <Switch>
              <Route
                path="/layout/dashboard"
                component={Loadable({
                  loader: () => import("../dashboard"),
                  loading: Loading
                })}
              />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
