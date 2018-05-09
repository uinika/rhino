import React from "react";
import "./style.scss";
import { Row, Col, Form, Icon, Input, Button, Checkbox } from "antd";
const FormItem = Form.Item;

export default Form.create()(
  class Login extends React.Component {
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFields((error, values) => {
        if (!error) {
          console.info("USER INFO:" ,values)
          this.props.history.push("layout/dashboard");
        }
      });
    };
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Row id="login" type="flex" justify="center" align="middle">
          <Col className="card" span={4}>
            <h1 className="logo">Admin</h1>
            <Form className="form" onSubmit={this.handleSubmit}>
              <FormItem>
                {getFieldDecorator("username", {
                  rules: [{ required: true, message: "请输入用户名！" }]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="用户名" size="large"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator("password", {
                  rules: [{ required: true, message: "请输入密码！" }]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="密码" size="large"
                  />
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" className="button">
                </Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      );
    }
  }
);
