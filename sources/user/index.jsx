import React from "react";
import "./style.scss";
import { Table } from "antd";

import CommonSearchForm from "../common/components/search-form";

const columns = [
  {
    title: "Full Name",
    width: 100,
    dataIndex: "name",
    key: "name",
    fixed: "left"
  },
  { title: "Name", width: 200, dataIndex: "age", key: "age", fixed: "left" },
  { title: "ID", dataIndex: "address", key: "1", width: 150 },
  { title: "Date", dataIndex: "address", key: "2", width: 150 },
  { title: "Column 3", dataIndex: "address", key: "3", width: 150 },
  { title: "Column 4", dataIndex: "address", key: "4", width: 150 },
  { title: "Column 5", dataIndex: "address", key: "5", width: 150 },
  { title: "User Info", dataIndex: "address", key: "6", width: 150 },
  { title: "User Info", dataIndex: "address", key: "7", width: 150 },
  { title: "User Info", dataIndex: "address", key: "8" },
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
    name: `Userame`,
    age: 417324890174010,
    address: `Some User Infomation ${i}`
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
            scroll={{ x: 2500, y: 300 }}
          />
        </div>
      </div>
    );
  }
}
