import Vue from "vue";
import VueRouter from "vue-router";
import Http from "./common/scripts/http";
import Auth from "./common/scripts/auth";
import Layout from "./layout/index.vue";

Vue.use(VueRouter);

const Login = resolve => require(["./login/index.vue"], resolve)

const Router = new VueRouter({
  routes: [{
    path: "/",
    component: Login
  }, {
    path: "/login",
    component: Login
  }, {
    path: "/layout",
    component: Layout,
    children: [{
      path: "template",
      meta: {
        auth: true
      },
      component: resolve => require(["./template/index.vue"], resolve)
    }, {
      path: "trial",
      meta: {
        auth: true
      },
      component: resolve => require(["./trial/index.vue"], resolve),
      children: [{
        path: "blank",
        meta: {
          auth: true
        },
        component: resolve => require(["./trial/article/blank/index.vue"], resolve)
      }, {
        path: "produce",
        meta: {
          auth: true
        },
        component: resolve => require(["./trial/article/produce/index.vue"], resolve)
      }, {
        path: "preview",
        meta: {
          auth: true
        },
        component: resolve => require(["./trial/article/preview/index.vue"], resolve)
      }]
    }, {
      path: "judge",
      meta: {
        auth: true
      },
      component: resolve => require(["./judge/index.vue"], resolve)
    }, {
      path: "cases",
      meta: {
        auth: true
      },
      component: resolve => require(["./cases/index.vue"], resolve)
    }, {
      path: "repository",
      meta: {
        auth: true
      },
      component: resolve => require(["./repository/index.vue"], resolve)
    }]
  }]
});

Router.beforeEach((to, from, next) => {
  Auth.accessibility(to, from, next);
  Auth.interceptor();
});

export default Router;
