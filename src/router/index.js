import Vue from 'vue';
import Router from 'vue-router';

// Components Import (async)
const Home = () => import(/* webpackChunkName: "Home" */ '@/components/Home');
const NotFoundComponent = () => import(/* webpackChunkName: "Not-Found" */ '@/components/NotFoundComponent');


Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '*',
      component: NotFoundComponent,
    },
  ],
});
