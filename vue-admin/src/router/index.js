import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import Layout from '@/views/Layout/index'

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: "/",
    redirect: "/login",
    hidden: true,
    meta:{
      name: '主页'
    }
  },
  {
    path: "/login",
    name: "login",
    hidden: true,
    component: () => import("@/views/login/index.vue"),
    meta:{
      name: '登录'
    }
  },
  {
    path: "/console",
    name: "console",
    redirect: '/index',
    component: Layout,
    meta:{
      name: '控制台',
      icon: 'console'
    },
    children:[
      {
        path: "/index",
        name: "index",
        component: () => import("@/views/Console/index.vue"),
        meta:{
          name: '首页'
        }
      }
    ]
  },
  {
    path: "/user",
    name: "user",
    component: Layout,
    meta:{
      name: '用户管理',
      icon: 'user'
    },
    children:[
      {
        path: "/userList",
        name: "userList",
        component: () => import("@/views/user/userList.vue"),
        meta:{
          name: '用户列表'
        }
      }
    ]
  },
  {
    path: "/info",
    name: "info",
    component: Layout,
    meta:{
      name: '信息管理',
      icon: 'info'
    },
    children:[
      {
        path: "/infoIndex",
        name: "infoIndex",
        component: () => import("@/views/info/index.vue"),
        meta:{
          name: '信息列表'
        },
      },
      {
        path: "/infoCategory",
        name: "infoCategory",
        component: () => import("@/views/info/category.vue"),
        meta:{
          name: '信息分类'
        },
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
