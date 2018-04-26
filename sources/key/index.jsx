import React from "react";
import "./style.scss";
import { Row, Col, Form, Icon, Input, Button } from "antd";
import SearchForm from "./search-form";

const FormItem = Form.Item;

export default Form.create()(
  class key extends React.Component {
    render() {
      const {
        getFieldDecorator,
        getFieldsError,
        getFieldError,
        isFieldTouched
      } = this.props.form;

      return (
        <div id="key">
          <SearchForm />
          <div className="result-table common-box">test</div>
        </div>
      );
    }
  }
);
