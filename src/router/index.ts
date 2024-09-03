import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    name: 'Login',
    path: '/login',
    meta: {
      title: 'Login | Publish Agency Partner',
      isAuth: false,
    },
    component: () => import('../views/authentication/Login.vue'),
  },
  {
    name: 'Login Administrator',
    path: '/admin/login',
    meta: {
      title: 'Login Administrator | Publish Agency Partner',
      isAuth: false,
    },
    component: () => import('../views/authentication/FormAdmin.vue'),
  },
  {
    name: 'Dashboard Admin',
    path: '/admin/dashboard',
    meta: {
      title: 'Dashboard Administrator | Publish Agency Partner',
      isAuth: true,
    },
    component: () => import('../views/administrator/Dashboard.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

router.beforeEach((to, _from, next) => {
  document.title = to.meta.title as string;
  next();
});

export default router;