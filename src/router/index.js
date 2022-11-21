import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: () => import("../views/Layout"),
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "Index",
        component: () => import("../views/index/Index.vue"),
      },
      {
        path: "/account/all",
        name: "account_all",
        component: () => import("../views/account/All.vue"),
        meta: {
          bread: ["账户管理", "所有人员"],
        },
      },
      {
        path: "/product/all",
        name: "product_all",
        component: () => import("../views/product/All.vue"),
        meta: {
          bread: ["产品管理", "所有产品"],
          keepAlive: true,
        },
      },
      {
        path: "/product/detail",
        name: "product_detail",
        component: () => import("../views/product/Detail.vue"),
        meta: {
          bread: ["产品管理", "全部产品", "产品详情"],
        },
      },
      {
        path: "/orders/all",
        name: "order_all",
        component: () => import("../views/order/Index.vue"),
        meta: {
          bread: ["订单管理", "所有订单"],
        },
      },
      {
        path: "/customer/info",
        name: "customer_all",
        component: () => import("../views/customer/Info.vue"),
        meta: {
          bread: ["客户管理", "所有客户"],
        },
      },
      {
        path: "/my",
        name: "my",
        component: () => import("../views/my/My.vue"),
        meta: {
          bread: ["个人中心"],
        },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
