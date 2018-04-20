// library
import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
// import store from "./store"
// import router from "./router"
import { HashRouter } from "react-router-dom";
import { hot } from "react-hot-loader";
// css
import "./common/styles/base.scss";
import "./common/styles/reset.scss";
import Router from "./router.js";

ReactDOM.render(
  <HashRouter>
    <Router />
  </HashRouter>,
  document.getElementById("app")
);
