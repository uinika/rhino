import React from "react";
import { Tag, Icon } from "antd";
import Http from "../common/utils/http";

export default class Sheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sheet1: [],
      sheet2: [],
      sheet3: [],
      sheet4: []
    };
  }
  componentDidMount() {
    Http.fetch({
      method: "GET",
      url: Http.url.master + "/dashboard/sheet"
    }).then(result => {
      const data = result.data;
      console.log(data);
      if (Http.protocol(data, "SUCCESS")) {
        this.setState(data.body);
      }
    });
  }
  render() {
    return (
      <div>
        <section className="key">
          <div className="left">
            <h5>
              <Icon type="table" />
              &nbsp;&nbsp;Sheet-1
            </h5>
            <ul className="list">
              {this.state.sheet1.map((value, index) => (
                <li key={index}>
                  <span>
                    {index + 1}、{value.name}
                  </span>
                  <span>
                    <Tag>{value.date}</Tag>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="right">
            <h5>
              <Icon type="table" />
              &nbsp;&nbsp;Sheet-2
            </h5>
            <ul className="list">
              {this.state.sheet2.map((value, index) => (
                <li key={index}>
                  <span>
                    {index + 1}、{value.name}
                  </span>
                  <span>
                    <Tag>{value.date}</Tag>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="agreement">
          <div className="left">
            <h5>
              <Icon type="table" />
              &nbsp;&nbsp;Sheet-3
            </h5>
            <ul className="list">
              {this.state.sheet3.map((value, index) => (
                <li key={index}>
                  <span>
                    {index + 1}、{value.name}
                  </span>
                  <span>
                    <Tag>{value.date}</Tag>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="right">
            <h5>
              <Icon type="table" />
              &nbsp;&nbsp;Sheet-4
            </h5>
            <ul className="list">
              {this.state.sheet4.map((value, index) => (
                <li key={index}>
                  <span>
                    {index + 1}、{value.name}
                  </span>
                  <span>
                    <Tag>{value.date}</Tag>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}
