import React from "react";
import { Icon } from "antd";
import Http from "../common/utils/http";

export default class Statistic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statistic1: 1985,
      statistic2: 2018,
      statistic3: 2019,
      statistic4: 2020
    };
  }

  componentDidMount() {
    Http.fetch({
      method: "GET",
      url: Http.url.master + "/dashboard/statistic"
    }).then(result => {
      const data = result.data;
      console.log(data)
      if (Http.protocol(data, "SUCCESS")) {
        this.setState(data.body);
      }
    });
  }

  render() {
    return (
      <div>
        <section className="charts">
          <div className="box blue animated jackInTheBox">
            <span className="icon">
              <Icon type="user-add" />
            </span>
            <div className="infomation">
              <span>Statistic-1</span>
              <span>{this.state.statistic1}</span>
            </div>
          </div>
          <div className="box red animated jackInTheBox">
            <span className="icon">
              <Icon type="user-delete" />
            </span>
            <div className="infomation">
              <span>Statistic-2</span>
              <span>{this.state.statistic2}</span>
            </div>
          </div>
          <div className="box green animated jackInTheBox">
            <span className="icon">
              <Icon type="usergroup-add" />
            </span>
            <div className="infomation">
              <span>Statistic-3</span>
              <span>{this.state.statistic3}</span>
            </div>
          </div>
          <div className="box orange animated jackInTheBox">
            <span className="icon">
              <Icon type="usergroup-delete" />
            </span>
            <div className="infomation">
              <span>Statistic-4</span>
              <span>{this.state.statistic4}</span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
