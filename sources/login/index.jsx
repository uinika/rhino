import React from "react";
import "./style.scss";
import Http from "../common/utils/http";
import { Row, Col, Form, Icon, Input, Button, Select } from "antd";
const FormItem = Form.Item;
const Option = Select.Option;

export default Form.create()(
  class Login extends React.Component {
    handleLogin = event => {
      event.preventDefault();
      this.props.form.validateFields((error, values) => {
        if (!error) {
          this.props.history.push("layout/dashboard");
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
              <FormItem>
                <Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Username" />
              </FormItem>
              <FormItem>
                <Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} type="password" placeholder="Password" />
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
