import Vue from "vue";
import Vuex from "vuex";
import Trial from "./trial/script.store";

Vue.use(Vuex);

const Store = new Vuex.Store({
  // strict: process.env.NODE_ENV !== "production",
  modules: {
    Trial
  }
});

if (module.hot) {
  module.hot.accept([
    "./store",
    "./trial/script.store",
  ], () => {
    Store.hotUpdate({
      modules: {
        Trial: require("./trial/script.store").default,
      }
    })
    console.info("Vue hot update!");
  })
};

export default Store;
