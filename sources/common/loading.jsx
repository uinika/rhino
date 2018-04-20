import React from "react";
import { Spin } from "antd";
import "./style.scss";

export default class Loading extends React.Component {
  render() {
    return (
      <div id="loading">
        <Spin size="large" />
      </div>
    );
  }
}
