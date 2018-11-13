import { observable, computed, action } from "mobx";
import { Tag } from "antd";
import React from "react";
import Loading from "./common/components/loading";

class Store {
  /** 全司过渡动画 */
  @observable
  loading = true;
}

export default new Store();
