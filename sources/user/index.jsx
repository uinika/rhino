import React from "react";
import "./style.scss";
import { Row, Col, Form, Icon, Input, Button } from "antd";
import { Table, Popconfirm } from "antd";
import CommonSearchForm from "../common/components/search-form";

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 883372639183749183,
    address: `Tianfu software park...building ${i}`
  });
}

const EditableCell = ({ editable, value, onChange }) => (
  <div>
    {editable ? (
      <Input
        style={{ margin: "-5px 0" }}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    ) : (
      value
    )}
  </div>
);

const FormItem = Form.Item;

export default Form.create()(
  class key extends React.Component {
    constructor(props) {
      super(props);
      this.columns = [
        {
          title: "Username",
          dataIndex: "name",
          width: "20%",
          render: (text, record) => this.renderColumns(text, record, "name")
        },
        {
          title: "ID",
          dataIndex: "age",
          width: "20%",
          render: (text, record) => this.renderColumns(text, record, "age")
        },
        {
          title: "Address",
          dataIndex: "address",
          width: "35%",
          render: (text, record) => this.renderColumns(text, record, "address")
        },
        {
          title: "Operation",
          dataIndex: "operation",
          render: (text, record) => {
            const { editable } = record;
            return (
              <div className="editable-row-operations">
                {editable ? (
                  <span>
                    <a onClick={() => this.save(record.key)}>Save</a>
                    <Popconfirm
                      title="Sure to cancel?"
                      onConfirm={() => this.cancel(record.key)}
                    >
                      <a>Cancel</a>
                    </Popconfirm>
                  </span>
                ) : (
                  <a onClick={() => this.edit(record.key)}>Edit</a>
                )}
              </div>
            );
          }
        }
      ];
      this.state = { data };
      this.cacheData = data.map(item => ({ ...item }));
    }
    renderColumns(text, record, column) {
      return (
        <EditableCell
          editable={record.editable}
          value={text}
          onChange={value => this.handleChange(value, record.key, column)}
        />
      );
    }
    handleChange(value, key, column) {
      const newData = [...this.state.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target[column] = value;
        this.setState({ data: newData });
      }
    }
    edit(key) {
      const newData = [...this.state.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        target.editable = true;
        this.setState({ data: newData });
      }
    }
    save(key) {
      const newData = [...this.state.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        delete target.editable;
        this.setState({ data: newData });
        this.cacheData = newData.map(item => ({ ...item }));
      }
    }
    cancel(key) {
      const newData = [...this.state.data];
      const target = newData.filter(item => key === item.key)[0];
      if (target) {
        Object.assign(
          target,
          this.cacheData.filter(item => key === item.key)[0]
        );
        delete target.editable;
        this.setState({ data: newData });
      }
    }
    render() {
      return (
        <div id="key" className="animated fadeIn">
          <div className="search-form common-box">
            <CommonSearchForm />
          </div>
          <div className="result-table common-box">
            <Table
              bordered
              dataSource={this.state.data}
              columns={this.columns}
            />
          </div>
        </div>
      );
    }
  }
);
