import React from "react";
import "./style.scss";
import { Row, Col, Form, Icon, Input, Button } from "antd";

const FormItem = Form.Item;

export default Form.create()(
  class SearchForm extends React.Component {
    render() {
      const {
        getFieldDecorator,
        getFieldsError,
        getFieldError,
        isFieldTouched
      } = this.props.form;

      return (
        <Form layout="inline">
          <Row>
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
          </Row>
          <Row>
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
          <Row >
            <Col type="flex" justify="start">
              <Button type="primary" icon="search">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      );
    }
  }
);
