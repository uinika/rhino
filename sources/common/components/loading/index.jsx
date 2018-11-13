import React from "react";
import { Row, Col, Spin, Icon } from "antd";
import { observer, inject } from "mobx-react";
import "./style.scss";

@inject("GlobalStore")
@observer
export default class Loading extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return this.props.GlobalStore.loading ? (
      <Row id="loading" type="flex" justify="center" align="middle">
        <Col>
          <Spin size="large" />
        </Col>
      </Row>
    ) : (
      <React.Fragment />
    );
  }
}
