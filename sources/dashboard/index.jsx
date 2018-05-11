import React from "react";
import "./style.scss";
import { Breadcrumb, Card, Input, Select, Col, Row, Icon } from "antd";
const Search = Input.Search;
const InputGroup = Input.Group;
const Option = Select.Option;

export default class Dashboard extends React.Component {
  render() {
    return (
      <div id="dashboard" className="animated fadeIn">
        <Card>Charts</Card>
        <Row gutter={1}>
          <Col span={12}>
            <Card
              title={
                <span>
                  <Icon type="key" />&nbsp;&nbsp;Key
                </span>
              }
              bordered={false}
              extra={<a href="#/layout/key">More</a>}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              title={
                <span>
                  <Icon type="car" />&nbsp;&nbsp;Vehicle
                </span>
              }
              bordered={false}
              extra={<a href="#/layout/vehicle">More</a>}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              title={
                <span>
                  <Icon type="user" />&nbsp;&nbsp;User
                </span>
              }
              bordered={true}
              extra={<a href="#/layout/user">More</a>}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              title={
                <span>
                  <Icon type="book" />&nbsp;&nbsp;Agreement
                </span>
              }
              bordered={true}
              extra={<a href="#/layout/agreement/bluetooth">More</a>}
            >
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
