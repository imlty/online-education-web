import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/", //路由到的地址(自定义)
    component: () => import("../views/Home.vue"),
    //引入组件，组件Home.vue所在路径
    //Home.vue是需要路由的vue组件
  },
  // navbar path
  {
    path: "/FanBase",
    component: () => import("../views/FanBase/index.vue"),
  },
  {
    path: "/LearningPath",
    component: () => import("../views/LearningPath/index.vue"),
  },
  {
    path: "/OfferWall",
    component: () => import("../views/OfferWall/index.vue"),
  },
  {
    path: "/SystemCourse",
    component: () => import("../views/SystemCourse/index.vue"),
  },
  {
    path: "/VIP",
    component: () => import("../views/VIP/index.vue"),
  },
];
const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});
export default router;
