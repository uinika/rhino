import React from "react";
import "./style.scss";
import { Form, Row, Col, Input, Button, Icon, Table } from "antd";
const FormItem = Form.Item;

const columns = [
  { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' },
  { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' },
  { title: 'Column 1', dataIndex: 'address', key: '1', width: 150 },
  { title: 'Column 2', dataIndex: 'address', key: '2', width: 150 },
  { title: 'Column 3', dataIndex: 'address', key: '3', width: 150 },
  { title: 'Column 4', dataIndex: 'address', key: '4', width: 150 },
  { title: 'Column 5', dataIndex: 'address', key: '5', width: 150 },
  { title: 'Column 6', dataIndex: 'address', key: '6', width: 150 },
  { title: 'Column 7', dataIndex: 'address', key: '7', width: 150 },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <a href="javascript:;">action</a>,
  },
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

export default Form.create()(
  class Key extends React.Component {
    state = {
      expand: false
    };

    handleSearch = e => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        console.log("Received values of form: ", values);
      });
    };

    handleReset = () => {
      this.props.form.resetFields();
    };

    toggle = () => {
      const { expand } = this.state;
      this.setState({ expand: !expand });
    };

    // To generate mock Form.Item
    getFields() {
      const count = this.state.expand ? 10 : 6;
      const { getFieldDecorator } = this.props.form;
      const children = [];
      for (let i = 0; i < 10; i++) {
        children.push(
          <Col
            span={8}
            key={i}
            style={{ display: i < count ? "block" : "none" }}
          >
            <FormItem label={`Field ${i}`}>
              {getFieldDecorator(`field-${i}`, {
                rules: [
                  {
                    required: true,
                    message: "Input something!"
                  }
                ]
              })(<Input placeholder="placeholder" />)}
            </FormItem>
          </Col>
        );
      }
      return children;
    }
    render() {
      return (
        <div id="key">
          <Form
            className="ant-advanced-search-table"
            onSubmit={this.handleSearch}
          >
            <Row gutter={24}>{this.getFields()}</Row>
            <Row>
              <Col span={12} style={{ textAlign: "left" }}>
                <Button type="primary" htmlType="submit">
                  Add
                </Button>
              </Col>
              <Col span={12} style={{ textAlign: "right" }}>
                <Button type="primary" htmlType="submit">
                  Search
                </Button>
                <Button style={{ marginLeft: 8 }} onClick={this.handleReset}>
                  Clear
                </Button>
                <a
                  style={{ marginLeft: 8, fontSize: 12 }}
                  onClick={this.toggle}
                >
                  Collapse <Icon type={this.state.expand ? "up" : "down"} />
                </a>
              </Col>
            </Row>
          </Form>
          <Table className="ant-advanced-search-form" columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />
        </div>
      );
    }
  }
);
