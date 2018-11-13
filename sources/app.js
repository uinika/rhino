// library
import React from "react";
import ReactDOM from "react-dom";
import Router from "./router.js";
import Auth from "./common/utils/auth.js";
import { LocaleProvider } from "antd";
import CN from "antd/lib/locale-provider/zh_CN";
import "babel-polyfill";
import { Provider } from "mobx-react";
import Store from "./store";
import DevTools from "mobx-react-devtools";
// css
import "./common/styles/base.scss";
import "./common/styles/reset.scss";
import "./common/styles/awesome/css/fontawesome-all.min.css";
import "animate.css/animate.min.css";
// theme
import "antd/dist/antd.less";
import "./common/styles/theme.less";



ReactDOM.render(
  <LocaleProvider locale={CN}>
    <Provider GlobalStore={Store}>
      <Router>
        <DevTools />
      </Router>
    </Provider>
  </LocaleProvider>,
  document.getElementById("app")
);

Auth.initializer();
Auth.interceptor();