import { observable, computed, action } from "mobx";

class Store {
  /** 双向绑定的文本内容 */
  @observable
  text = "";
}

export default new Store();
