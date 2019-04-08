import Vue from 'vue';
import Router from 'vue-router';
const Index = resolve => require(['../views/index'], resolve);

Vue.use(Router);
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
      name: 'Index',
      meta: {
        title: '首页'
      }
    }]
});
