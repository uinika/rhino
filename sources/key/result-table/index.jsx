import React from "react";
import "./style.scss";
import { Table, Badge, Menu, Dropdown, Icon, Button } from "antd";

const menu = (
  <Menu>
    <Menu.Item>Add</Menu.Item>
    <Menu.Item>Restore</Menu.Item>
  </Menu>
);

export default class ResultTable extends React.Component {
  columns = [
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "ID", dataIndex: "id", key: "id" },
    { title: "VIN", dataIndex: "vin", key: "vin" },
    { title: "Phone Number", dataIndex: "number", key: "number" },
    { title: "Application Date", dataIndex: "date", key: "date" },
    { title: "4S Shop", dataIndex: "shop", key: "shop" },
    {
      title: "Operation",
      key: "operation",
      render: () => (
        <a href="javascript:;">
          <Dropdown overlay={menu}>
            <Button type="primary" shape="circle" icon="search">

            </Button>
          </Dropdown>
        </a>
      )
    }
  ];

  datas() {
    const data = [];
    for (let i = 0; i < 50; ++i) {
      data.push({
        key: i,
        name: "Hank",
        id: "122833741954830033",
        vin: "ABDD341312512341251",
        number: "18780269188",
        date: "2018年04月23日 星期一",
        shop: "Ford 4S dealership"
      });
    }
    return data;
  }

  render() {
    return (
      <Table
        className="components-table-demo-nested"
        columns={this.columns}
        // expandedRowRender={expandedRowRender}
        dataSource={this.datas()}
      />
    );
  }
}
