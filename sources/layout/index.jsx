import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { observer, inject } from "mobx-react";
import { Layout, Menu, Breadcrumb, Icon, Dropdown, Modal, message } from "antd";
import Http from "../common/utils/http";
import { storage } from "../common/utils/helper";
import LayoutRoute from "./route";

const { Header, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const confirm = Modal.confirm;

@inject("GlobalStore")
@observer
export default class GlobalLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  // 左侧菜单的显示/隐藏切换
  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  // 处理退出系统事件
  handleLogout = () => {
    confirm({
      title: "确认退出？",
      content: "",
      okText: "确认",
      okType: "danger",
      cancelText: "取消",
      onOk() {
        Http.fetch({
          method: "GET",
          url: Http.url.master + "/system/logout"
        })
          .then(result => {
            const data = result.data;
            if (Http.protocol(data, "SUCCESS")) {
              message.success(data.head.message);
              location.href = data.body.url;
            }
          })
          .then(() => {
            storage.empty();
          });
      }
    });
  };

  componentDidMount = () => {
    console.log("componentDidMount!");
  };

  handleGithub = () => {
    location.href = "https://github.com/uinika";
  };

  render() {
    return (
      <Layout id="layout" className="animated fadeIn">
        <Sider className="left" trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" onClick={this.handleGithub}>
            <Icon type="github" />
            <span
              className={"animated " + (this.state.collapsed ? "fadeOut" : "fadeIn")}
              style={{
                display: this.state.collapsed ? "none" : "inline-block"
              }}>
              Rhino
            </span>
          </div>
          <Menu theme="dark" mode="inline" defaultOpenKeys={["menu"]}>
            <Menu.Item key="dashboard">
              <Link to="/layout/dashboard">
                <Icon type="dashboard" />
                <span>Dashboard</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="menu"
              title={
                <span>
                  <Icon type="folder" />
                  <span>Menu</span>
                </span>
              }>
              <Menu.Item key="demo">
                <Link to="/layout/demo">
                  <Icon type="folder-open" />
                  <span>Demo</span>
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="right">
          <Header className="header">
            <Icon className="trigger-menu" type={this.state.collapsed ? "menu-unfold" : "menu-fold"} onClick={this.toggleCollapse} />
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="https://github.com/uinika/rhino">
                  React 16.6.3, React-router 4, Mobx 5 and so on... created by <b>Hank</b>
                </a>
              </Breadcrumb.Item>
            </Breadcrumb>
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item onClick={this.handleLogout}>
                    <Icon type="logout" />
                    &nbsp;&nbsp;Quit
                  </Menu.Item>
                </Menu>
              }>
              <a className="admin">
                <span>{storage.get("username")}</span>
                <Icon className="trigger-user" type="user" />
              </a>
            </Dropdown>
          </Header>
          <LayoutRoute />
        </Layout>
      </Layout>
    );
  }
}
