// library
import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
// import store from "./store"
// import router from "./router"
import { hot } from "react-hot-loader";
// css
import "antd/dist/antd.css";
import "./common/font-awesome/css/fontawesome-all.min.css";
import "./common/styles/base.scss";
import "./common/styles/reset.scss";
import Router from "./router.js";

ReactDOM.render(
  <Router />,
  document.getElementById("app")
);
