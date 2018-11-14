import React from "react";
import Http from "./http.js";
import Encrypt from "./encrypt.js";
import { Route, Redirect } from "react-router-dom";
import { storage } from "../utils/helper";
import queryString from "querystringify";

export default {
  /**  Handle url search when take the thirdparty auth */
  initializer() {
    // storage.set("token", "demo");
    // storage.set("username", "demo");
    // storage.set("permissions", "demo");
  },

  /** Http interceptor */
  interceptor() {
    Http.fetch.interceptors.request.use(
      function(config) {
        const token = Encrypt.token.get();
        if (token) config.headers.Authorization = token;
        return config;
      },
      function(error) {
        return Promise.reject(error);
      }
    );
    Http.fetch.interceptors.response.use(
      function(response) {
        const head = response.data.head;
        const body = response.data.body;
        if (head && typeof head === "object" && head.hasOwnProperty("status")) {
          if (head.status === "TIMEOUT") {
            window.location.href = body.url; // 首先，跳转到指定登陆页。
            storage.empty(); // 然后，清空Storage。
          }
        }
        return response;
      },
      function(error) {
        return Promise.reject(error);
      }
    );
  },

  /** Check if current route is authed */
  authRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          Encrypt.token.get() ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: Http.url.login,
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }
};
