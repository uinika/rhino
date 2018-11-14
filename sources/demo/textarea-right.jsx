import React from "react";
import "./style.scss";
import { Input } from "antd";
import { observer, inject } from "mobx-react";

const { TextArea } = Input;

@inject("Store")
@observer
export default class DemoTextareaRight extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = event => {
    this.props.Store.text = event.target.value;
  };

  shouldComponentUpdate(nextProps) {
    if (this.props.Store.text !== nextProps.Store.text) {
      return true;
    }
    return false;
  }

  render() {
    return <TextArea rows={39} onChange={this.handleChange} value={this.props.Store.text} placeholder="在这里您可以看到左侧的输入结果..." />;
  }
}
