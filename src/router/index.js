import Vue from 'vue';
import Router from 'vue-router';
import BasicDataRegister from '@/pages/BasicDataRegister';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BasicDataRegister',
      component: BasicDataRegister,
    },
  ],
});
