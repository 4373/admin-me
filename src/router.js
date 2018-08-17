import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export const Routes = [
  {
    path: "system",
    name: "系统的一些设置",
    icon: "icon-setting",
    component: {
      render(h) {
        return h("router-view");
      }
    },
    children: [
      {
        path: "role",
        name: "权限角色",
        component: {
          render(h) {
            return h("router-view");
          }
        },
        children: [
          {
            path: "list",
            component: () => import("./views/role/list.vue")
          },
          {
            path: "deal",
            component: () => import("./views/role/deal.vue")
          },
          {
            path: "detail",
            component: () => import("./views/role/detail.vue")
          }
        ]
      },
      {
        path: "account",
        name: "登录帐号管理",
        component: {
          render(h) {
            return h("router-view");
          }
        },
        children: [
          {
            path: "list",
            component: () => import("./views/account/list.vue")
          },
          {
            path: "deal",
            component: () => import("./views/account/deal.vue")
          },
          {
            path: "detail",
            component: () => import("./views/account/detail.vue")
          }
        ]
      }
    ]
  }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: Routes
    }
  ]
});
