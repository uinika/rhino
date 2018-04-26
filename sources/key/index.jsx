import React from "react";
import "./style.scss";
import { Row, Col, Form, Icon, Input, Button } from "antd";
import SearchForm from "./search-form";
import ResultTable from "./result-table";

const FormItem = Form.Item;

export default Form.create()(
  class key extends React.Component {
    render() {
      return (
        <div id="key">
          <div className="search-form common-box">
            <SearchForm />
          </div>
          <div className="result-table common-box">
            <ResultTable />
          </div>
        </div>
      );
    }
  }
);
