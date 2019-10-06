import Vue from 'vue';
import Router from 'vue-router';
import BasicDataRegister from '@/pages/BasicDataRegister';
import AddressRegister from '@/pages/AddressRegister';
import PlansList from '@/pages/PlansList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BasicDataRegister',
      component: BasicDataRegister,
    },
    {
      path: '/address',
      name: 'AddressRegister',
      component: AddressRegister,
    },
    {
      path: '/plans',
      name: 'PlansList',
      component: PlansList,
    },
  ],
});
