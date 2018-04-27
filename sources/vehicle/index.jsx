import React from "react";
import "./style.scss";
import { Table } from "antd";

import CommonSearchForm from "../common/components/search-form";

const columns = [
  {
    title: "Vehicle Model",
    width: 150,
    dataIndex: "name",
    key: "name",
    fixed: "left"
  },
  { title: "VIN", width: 200, dataIndex: "age", key: "age", fixed: "left" },
  { title: "Date of Register", dataIndex: "address", key: "1", width: 150 },
  { title: "Date of Purchase", dataIndex: "address", key: "2", width: 150 },
  { title: "Column 3", dataIndex: "address", key: "3", width: 150 },
  { title: "Column 4", dataIndex: "address", key: "4", width: 150 },
  { title: "Column 5", dataIndex: "address", key: "5", width: 150 },
  { title: "Vehicle Info", dataIndex: "address", key: "6", width: 150 },
  { title: "Vehicle Info", dataIndex: "address", key: "7", width: 150 },
  { title: "Vehicle Info", dataIndex: "address", key: "8" },
  {
    title: "Operation",
    key: "operation",
    fixed: "right",
    width: 100,
    render: () => <a href="javascript:;">More</a>
  }
];

const data = [];
for (let i = 0; i < 1000; i++) {
  data.push({
    key: i,
    name: `Mondeo CX30`,
    age: 417324890174010,
    address: `Some Vehicle Infomation ${i}`
  });
}

export default class key extends React.Component {
  render() {
    return (
      <div id="key">
        <div className="search-form common-box">
          <CommonSearchForm />
        </div>
        <div className="result-table common-box">
          <Table
            columns={columns}
            dataSource={data}
            scroll={{ x: 2500, y: 600 }}
          />
        </div>
      </div>
    );
  }
}
