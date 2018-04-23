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
          <Col span={4}>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator("username", {
                  rules: [{ required: true, message: "请输入你的用户名！" }]
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
                  rules: [{ required: true, message: "请输入你的密码！" }]
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
                {getFieldDecorator("remember", {
                  valuePropName: "checked",
                  initialValue: true
                })(<Checkbox>记住我</Checkbox>)}

                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  登录
                </Button>
              </FormItem>
            </Form>
          </Col>
        </Row>
      );
    }
  }
);
