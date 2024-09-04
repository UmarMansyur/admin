import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    name: 'Login',
    path: '/login',
    meta: {
      title: 'Login',
      isAuth: false,
    },
    component: () => import('../views/authentication/Login.vue'),
  },
  {
    name: 'Login Administrator',
    path: '/admin/login',
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
  if(to.meta.isAuth && !sessionStorage.getItem('token')) {
    next({ name: 'Login' });
    return;
  }
  if(!to.meta.isAuth && sessionStorage.getItem('token')) {
    next();
    return;
  }

  if(to.name !== 'Login' && to.name !== 'Login Administrator' && !sessionStorage.getItem('token')) {
    next({ name: 'Login' });
    return;
  }

  if(to.name === 'Login' && sessionStorage.getItem('token')) {
    next({ name: 'Dashboard Admin' });
    return;
  }

  if(to.name === 'Login Administrator' && sessionStorage.getItem('token')) {
    next({ name: 'Dashboard Admin' });
    return;
  }

  if(to.name !== 'Login' && to.name !== 'Login Administrator' && sessionStorage.getItem('token')) {
    next();
    return;
  }

  next();
});

export default router;