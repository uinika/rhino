import React from "react";
import "./style.scss";
import { Row, Col, Form, Icon, Input, Button } from "antd";

import CommonSearchForm from "../common/components/search-form";

const FormItem = Form.Item;

export default Form.create()(
  class key extends React.Component {
    render() {
      return (
        <div id="key">
          <div className="search-form common-box">
            <CommonSearchForm />
          </div>
          <div className="result-table common-box">

          </div>
        </div>
      );
    }
  }
);
