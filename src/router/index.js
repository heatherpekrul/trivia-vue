import Vue from 'vue';
import VueRouter from 'vue-router';
import Firebase from 'firebase';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/login',
  },
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      requiresAnon: true,
    },
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const { currentUser } = Firebase.auth();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresAnon = to.matched.some(record => record.meta.requiresAnon);

  if (requiresAuth && !currentUser) {
    next('login');
  } else if (requiresAnon && currentUser) {
    next('logout');
  } else {
    next();
  }
});

export default router;
