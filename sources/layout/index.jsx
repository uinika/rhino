import React from "react";
import "./style.scss";
import { Route, Link, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import Loading from "../common/components/loading";
import { Layout, Menu, Breadcrumb, Icon, Dropdown } from "antd";

const { Header, Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const DropdownMenu = (
  <Menu>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#">
        退出
      </a>
    </Menu.Item>
  </Menu>
);

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
      <Layout id="layout" className="animated fadeIn">
        <Sider
          className="left"
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo">Admin</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <Link to="/layout/dashboard">
                <Icon type="appstore" />
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="agreement"
              title={
                <span>
                  <Icon type="book" />
                  <span>Agreement</span>
                </span>
              }
            >
              <Menu.Item key="bluetooth">
                <Link to="/layout/agreement/bluetooth">
                  <i class="fab fa-bluetooth" />&nbsp;&nbsp;Bluetooth
                </Link>
              </Menu.Item>
              <Menu.Item key="window">
                <Link to="/layout/agreement/window">
                  <i class="fab fa-stumbleupon-circle" />&nbsp;&nbsp;Window
                </Link>
              </Menu.Item>
            </SubMenu>
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
        <Layout className="right">
          <Header className="header">
            <Icon
              className="trigger"
              type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
              onClick={this.toggle}
            />
            <Breadcrumb>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="#/layout/dashboard">Dashboard</a>
              </Breadcrumb.Item>
            </Breadcrumb>
            <Dropdown overlay={DropdownMenu}>
              <a className="admin">
                <Icon className="trigger" type="user" />
              </a>
            </Dropdown>
          </Header>
          <Content className="content">
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
                path="/layout/agreement/bluetooth"
                component={Loadable({
                  loader: () => import("../agreement/bluetooth"),
                  loading: Loading
                })}
              />
              <Route
                path="/layout/agreement/window"
                component={Loadable({
                  loader: () => import("../agreement/window"),
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
