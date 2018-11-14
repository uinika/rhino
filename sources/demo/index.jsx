import React from "react";
import "./style.scss";
import { Row, Col } from "antd";
import Store from "./store";
import { Provider } from "mobx-react";
import TextareaLeft from "./textarea-left";
import TextareaRight from "./textarea-right";

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider Store={Store}>
        <div id="demo" className="animated fadeIn">
          <h2 className="title">这是一个使用&nbsp;<b>Mobx5</b>&nbsp;进行跨组件双向绑定的简单示例：</h2>
          <Row gutter={25}>
            <Col span={12}>
              <TextareaLeft />
            </Col>
            <Col span={12}>
              <TextareaRight />
            </Col>
          </Row>
        </div>
      </Provider>
    );
  }
}
