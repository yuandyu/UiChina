import Vue from 'vue';
import Router from 'vue-router';
const Index = resolve => require(['../views/index'], resolve);
const Find = resolve => require(['../views/find/Find'], resolve);
const FindIndex = resolve => require(['../views/find/FindIndex'], resolve);

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
    }, {
      path: '/find',
      component: Find,
      name: 'Find',
      meta: {
        title: '发现'
      },
      children: [{
        path: '/',
        component: FindIndex,
        name: 'FindIndex',
        meta: {
          title: '发现'
        }
      }]
    }]
});
