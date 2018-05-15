import React from "react";
import "./style.scss";
import {
  Breadcrumb,
  Card,
  Input,
  Select,
  Col,
  Row,
  Form,
  Icon,
  Button
} from "antd";

const FormItem = Form.Item;

export default class SearchForm extends React.Component {
  render() {
    return (
      <Card className="search-from" bordered={true}>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <Row gutter={30}>
            <Col span={6}>
              <FormItem label="VIN">
                <Input placeholder="VIN" />
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="Model">
                <Input placeholder="Model" />
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="Key SN">
                <Input placeholder="Key SN" />
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="Date">
                <Input placeholder="Date" />
              </FormItem>
            </Col>
          </Row>
          <Row gutter={30}>
            <Col span={6}>
              <FormItem label="Username">
                <Input placeholder="Username" />
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="User ID">
                <Input placeholder="User ID" />
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem label="Cellphone">
                <Input placeholder="Cellphone" />
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Button type="primary" icon="search">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    );
  }
}
