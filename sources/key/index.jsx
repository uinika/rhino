import React from "react";
import "./style.scss";
import { Row, Col, Form, Icon, Input, Button } from "antd";
import SearchForm from "./search-form";
import ResultTable from "./result-table";
import CommonSearchForm from "../common/components/search-form";

const FormItem = Form.Item;

export default Form.create()(
  class key extends React.Component {
    render() {
      return (
        <div id="key" className="animated fadeIn">
          <div className="search-form common-box">
            <CommonSearchForm />
          </div>
          <div className="result-table common-box">
            <ResultTable />
          </div>
        </div>
      );
    }
  }
);
