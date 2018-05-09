import React from "react";
import "./style.scss";
import { Route, Link, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../common/components/loading";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class GlobalLayout extends React.Component {
  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  render() {
    return (
      <Layout id="layout">
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo">Admin</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/layout/dashboard">
                <Icon type="appstore" />
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/layout/agreement">
                <Icon type="book" />
                <span>Agreement</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/layout/vehicle">
                <Icon type="car" />
                <span>Vehicle</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/layout/user">
                <Icon type="user" />
                <span>User</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/layout/key">
                <Icon type="key" />
                <span>Key</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
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
                path="/layout/agreement"
                component={Loadable({
                  loader: () => import("../agreement"),
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
