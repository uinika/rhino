import React from "react";
import "./style.scss";
import { Breadcrumb, Card, Input, Select, Col, Row } from "antd";
const Search = Input.Search;
const InputGroup = Input.Group;
const Option = Select.Option;

export default class Dashboard extends React.Component {
  render() {
    return (
      <div id="dashboard" className="animated fadeIn">
        <Card>
          Charts
        </Card>
        <Row gutter={1}>
          <Col span={12}>
            <Card
              title="Status"
              bordered={false}
              extra={<a href="#">More</a>}
            >
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
          <Col span={12}>
            <Card
              title="History"
              bordered={false}
              extra={<a href="#">More</a>}
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
