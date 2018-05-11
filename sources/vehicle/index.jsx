import React from "react";
import "./style.scss";
import { Breadcrumb, Card, Input, Col, Row, Form, Icon, Button } from "antd";

import SearchForm from "../common/components/search-form";

const FormItem = Form.Item;

export default class Vehicle extends React.Component {
  render() {
    return (
      <div id="vehicle" className="animated fadeIn">
        <SearchForm />
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
