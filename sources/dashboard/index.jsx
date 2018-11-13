import React from "react";
import Sheet from "./sheet";
import Statistic from "./statistic";
import "./style.scss";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div id="dashboard" className="animated fadeIn">
        <article className="content">
          <Statistic />
          <Sheet />
        </article>
      </div>
    );
  }
}
