import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    name: 'Login',
    path: '/login',
    component: () => import('../views/authentication/Login.vue'),
  },
  {
    name: 'Login Administrator',
    path: '/admin/login',
    component: () => import('../views/authentication/FormAdmin.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;