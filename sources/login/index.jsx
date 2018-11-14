import React from "react";
import "./style.scss";
import Http from "../common/utils/http";
import { storage } from "../common/utils/helper";
import { Row, Col, Form, Icon, Input, Button, Select, notification, message } from "antd";
const FormItem = Form.Item;

export default Form.create()(
  class Login extends React.Component {
    handleLogin = event => {
      event.preventDefault();
      this.props.form.validateFields((error, values) => {
        const username = values.username.trim();
        const password = values.password.trim();
        if (!error && username && password && !/\s/g.test(username) && !/\s/g.test(password)) {
          Http.fetch({
            method: "POST",
            url: Http.url.master + "/system/login",
            data: {
              username,
              password
            }
          }).then(result => {
            const data = result.data;
            if (Http.protocol(data, "SUCCESS")) {
              // 暂存一些登陆信息
              storage.set("token", data.body.token);
              storage.set("username", data.body.username);
              storage.set("permissions", data.body.permissions);
              message.success("用户" + username + "，您已登陆成功，Rhino欢迎您！");
              this.props.history.push("layout/dashboard");
            }
          });
        } else {
          notification.warning({
            message: "系统提示：",
            description: "请您输入用户名和密码，并且中间不能出现空格！",
            duration: 2
          });
        }
      });
    };

    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Row id="login" className="animated fadeInLeftBig" type="flex" justify="center" align="middle">
          <Col className="card" span={4}>
            <h1 className="logo">Rhino</h1>
            <Form className="form" onSubmit={this.handleLogin}>
              <FormItem>{getFieldDecorator("username", {})(<Input size="large" prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="用户名" />)}</FormItem>
              <FormItem>{getFieldDecorator("password", {})(<Input size="large" prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} type="password" placeholder="密    码" />)}</FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" className="button" />
              </FormItem>
            </Form>
          </Col>
        </Row>
      );
    }
  }
);
