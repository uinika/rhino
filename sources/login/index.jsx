import React from "react";
import "./style.scss";
import { Row, Col, Form, Icon, Input, Button, Checkbox, Select } from "antd";
const FormItem = Form.Item;
const Option = Select.Option;

export default Form.create()(
  class Login extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((error, values) => {
        if (!error) {
          console.info("USER INFO:", values);
          this.props.history.push("layout/dashboard");
        }
      });
    };
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Row
          id="login"
          className="animated fadeInLeftBig"
          type="flex"
          justify="center"
          align="middle"
        >
          <Col className="card" span={4}>
            <h1 className="logo">Admin</h1>
            <Form className="form" onSubmit={this.handleSubmit}>
              <FormItem>
                {getFieldDecorator("username", {
                  rules: [
                    {
                      required: true,
                      message: "请输入用户名！"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="用户名"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator("password", {
                  rules: [
                    {
                      required: true,
                      message: "请输入密码！"
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="密码"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator("language", {
                  rules: [
                    {
                      required: true,
                      message: "请选择默认语言！"
                    }
                  ]
                })(
                  <Select
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="语言"
                    style={{ width: 200 }}
                  >
                    <Option value="chinese">Chinese</Option>
                    <Option value="english">English</Option>
                  </Select>
                )}
              </FormItem>
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
