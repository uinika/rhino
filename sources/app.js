// library
import React from "react";
import ReactDOM from "react-dom";
import { hot } from "react-hot-loader";
import Router from "./router.js";
import "babel-polyfill";
// css
import "./common/styles/base.scss";
import "./common/styles/reset.scss";
import "./common/styles/awesome/css/fontawesome-all.min.css";
// theme
import "antd/dist/antd.less";
import "./common/styles/theme.less";

ReactDOM.render(<Router />, document.getElementById("app"));
