import React from "react";
import { Row, Col, Spin } from "antd";
import "./style.scss";

export default class Loading extends React.Component {
  render() {
    return (
      <Row id="loading" type="flex" justify="center" align="middle">
        <Col>
          <Spin size="large" />
        </Col>
      </Row>
    );
  }
}
