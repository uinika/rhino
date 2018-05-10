import React from "react";
import "./style.scss";
import { Breadcrumb, Card, Input, Select, Col, Row } from "antd";

export default class Agreement extends React.Component {
  render() {
    return (
      <div id="agreement" className="animated fadeIn">
        <Row gutter={1}>
          <Col span={24}>
            <Card bordered={true}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </Row>
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
