import React from "react";
import "./style.scss";
import { Breadcrumb, Card, Input, Select, Col, Row, Form, Icon } from "antd";

const FormItem = Form.Item;

export default class Agreement extends React.Component {
  render() {
    return (
      <div id="agreement" className="animated fadeIn">
        <Card bordered={true}>
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <Row gutter={40}>
              <Col span={6}>
                <FormItem label="Username">
                  <Input placeholder="Username" />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Username">
                  <Input placeholder="Username" />
                </FormItem>
              </Col>
              <Col span={6}>
                <FormItem label="Username">
                  <Input placeholder="Username" />
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Card>

        <Row gutter={1}>
          <Col span={24}>
            <Card bordered={false}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
