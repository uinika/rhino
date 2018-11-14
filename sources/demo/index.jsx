import React from "react";
import "./style.scss";
import { Input, Row, Col } from "antd";
import Store from "./store";
import { Provider } from "mobx-react";

const { TextArea } = Input;

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}
  render() {
    return (
      <Provider Store={Store}>
        <div id="demo" className="animated fadeIn">
          <h2 className="title">这是一个使用Mobx进行跨组件双向绑定的简单示例：</h2>
          <Row gutter={25}>
            <Col span={12}>
              <TextArea rows={39} />
            </Col>
            <Col span={12}>
              <TextArea rows={39} />
            </Col>
          </Row>
        </div>
      </Provider>
    );
  }
}
