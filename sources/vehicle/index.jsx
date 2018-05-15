import React from "react";
import "./style.scss";
import {
  Breadcrumb,
  Card,
  Input,
  Col,
  Row,
  Form,
  Icon,
  Button,
  Table
} from "antd";

import SearchForm from "../common/components/search-form";

const FormItem = Form.Item;

const columns = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left"
  },
  { title: "Age", width: 100, dataIndex: "age", key: "age", fixed: "left" },
  { title: "Column 1", dataIndex: "address", key: "1", width: 150 },
  { title: "Column 2", dataIndex: "address", key: "2", width: 150 },
  { title: "Column 3", dataIndex: "address", key: "3", width: 150 },
  { title: "Column 4", dataIndex: "address", key: "4", width: 150 },
  { title: "Column 5", dataIndex: "address", key: "5", width: 150 },
  { title: "Column 6", dataIndex: "address", key: "6", width: 150 },
  { title: "Column 7", dataIndex: "address", key: "7", width: 150 },
  { title: "Column 8", dataIndex: "address", key: "8" },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a href="javascript:;">action</a>
  }
];

const datas = [];
for (let i = 0; i < 100; i++) {
  datas.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`
  });
}

export default class Vehicle extends React.Component {
  render() {
    return (
      <div id="vehicle" className="animated fadeIn">
        <SearchForm />
        <Card className="search-result" bordered={false}>
          <Table columns={columns} dataSource={datas} scroll={{ x: 2000 }} />
        </Card>
      </div>
    );
  }
}
