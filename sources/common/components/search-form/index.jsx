import { Form, Row, Col, Input, Button, Icon } from "antd";
const FormItem = Form.Item;
import React from "react";
import "./style.scss";

class AdvancedSearchForm extends React.Component {
  state = {
    expand: false
  };

  handleSearch = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("Received values of form: ", values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  };

  // To generate mock Form.Item
  getFields() {
    const count = this.state.expand ? 10 : 6;
    const { getFieldDecorator } = this.props.form;
    const children = [];
    for (let i = 0; i < 10; i++) {
      children.push(
        <Col span={8} key={i} style={{ display: i < count ? "block" : "none" }}>
          <FormItem label={`Field ${i}`}>
            {getFieldDecorator(`field-${i}`, {
              rules: [
                {
                  required: true,
                  message: "Input something!"
                }
              ]
            })(<Input placeholder="placeholder" />)}
          </FormItem>
        </Col>
      );
    }
    return children;
  }

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;
    return (
      <Form className="ant-advanced-search-form" onSubmit={this.handleSearch}>
        <Row gutter={24}>
          <Col className="search-form-column" span={8}>
            <FormItem label="ID">
              {getFieldDecorator("username")(
                <Input placeholder="Please input ID card No." />
              )}
            </FormItem>
          </Col>
          <Col className="search-form-column" span={8}>
            <FormItem label="VIN">
              {getFieldDecorator("username")(
                <Input placeholder="Please input Vehicle Identification Number." />
              )}
            </FormItem>
          </Col>
          <Col className="search-form-column" span={8}>
            <FormItem label="Phone number">
              {getFieldDecorator("username")(
                <Input placeholder="Please input phone number." />
              )}
            </FormItem>
          </Col>

          <Col span={8}>
            <FormItem label="Name">
              {getFieldDecorator("username")(
                <Input placeholder="Please input User Name." />
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="Date">
              {getFieldDecorator("username")(
                <Input placeholder="Please input Application Date." />
              )}
            </FormItem>
          </Col>
          <Col span={8}>
            <FormItem label="4S Shop">
              {getFieldDecorator("username")(
                <Input placeholder="Please input 4S Shop." />
              )}
            </FormItem>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ textAlign: "right" }}>
            <Button type="primary" icon="search">
              Search
            </Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
              Clear
            </Button>
            <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
              Collapse <Icon type={this.state.expand ? "up" : "down"} />
            </a>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Form.create()(AdvancedSearchForm);
