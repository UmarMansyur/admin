import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    name: 'Login Administrator',
    path: '/login',
    meta: {
      title: 'Login',
      isAuth: false,
    },
    component: () => import('../views/authentication/FormAdmin.vue'),
  },
  {
    name: 'Dashboard Admin',
    path: '/admin/dashboard',
    meta: {
      title: 'Dashboard',
      isAuth: true,
    },
    component: () => import('../views/administrator/Dashboard.vue'),
  },
  {
    name: 'Setting Admin',
    path: '/admin/setting',
    meta: {
      title: 'Setting',
      isAuth: true,
    },
    component: () => import('../views/administrator/Setting.vue'),
  },
  {
    name: 'Not Found',
    path: '/:pathMatch(.*)*',
    meta: {
      title: 'Not Found',
      isAuth: false,
    },
    component: () => import('../views/error/404.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
});

router.beforeEach((to, _from, next) => {
  document.title = to.meta.title as string + ' | Publish Agency';
  if(to.name !== 'Login Administrator' && !sessionStorage.getItem('token')) {
    if(to.meta.isAuth) next({ name: 'Login Administrator' });
    else next();
    return;
  }
  next();
});

export default router;