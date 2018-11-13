import React from "react";
import "./style.scss";
import Moment from "moment";
import { storage } from "../common/utils/helper.js";
import Http from "../common/utils/http";

export default class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div id="demo" className="animated fadeIn">
        <h1>DEMO</h1>
      </div>
    );
  }
}
