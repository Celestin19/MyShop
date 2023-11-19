import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/loginpage.vue';
import HomePage from '../views/homepage.vue';
import Signup from '../views/signuppage.vue';
import AdminPage from '../views/AdminPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminPage
    }
  ]
})

export default router
