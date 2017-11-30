// library
import React from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
// import store from "./store";
// import router from "./router";
// css
import "./common/styles/base.scss";
import "./common/styles/reset.scss";
import Login from "./login/index.jsx";

ReactDOM.render(
  <Login />,
  document.getElementById("app")
);
