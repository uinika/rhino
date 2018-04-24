import React from "react";
import "./style.scss";
import { Route, Link, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../common/loading";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class GlobalLayout extends React.Component {
  state = {
    collapsed: false
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout id="layout" style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo">Admin</div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="0">
              <Link to="/layout/dashboard">
                <Icon type="appstore" />
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to="/layout/key">
                <Icon type="key" />
                <span>Key</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/layout/vehicle">
                <Icon type="car" />
                <span>Vehicle</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/layout/user">
                <Icon type="user" />
                <span>User</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/layout/setting">
                <Icon type="setting" />
                <span>Setting</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            <Switch>
              <Route
                path="/layout/dashboard"
                component={Loadable({
                  loader: () => import("../dashboard"),
                  loading: Loading
                })}
              />
              <Route
                path="/layout/key"
                component={Loadable({
                  loader: () => import("../key"),
                  loading: Loading
                })}
              />
              <Route
                path="/layout/user"
                component={Loadable({
                  loader: () => import("../user"),
                  loading: Loading
                })}
              />
              <Route
                path="/layout/vehicle"
                component={Loadable({
                  loader: () => import("../vehicle"),
                  loading: Loading
                })}
              />
              <Route
                path="/layout/setting"
                component={Loadable({
                  loader: () => import("../setting"),
                  loading: Loading
                })}
              />
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Rhino ©2018 Created by Hank
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
