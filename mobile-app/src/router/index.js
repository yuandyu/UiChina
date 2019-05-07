import Vue from 'vue';
import Router from 'vue-router';
const Index = resolve => require(['../views/index'], resolve);

const Find = resolve => require(['../views/find/Find'], resolve);
const FindIndex = resolve => require(['../views/find/FindIndex'], resolve);

const ExperienceIndex = resolve => require(['../views/experience/Index'], resolve);
const Experience = resolve => require(['../views/experience/Experience'], resolve);

const RingIndex = resolve => require(['../views/ring/Index'], resolve);
const Ring = resolve => require(['../views/ring/Ring'], resolve);

const NewsIndex = resolve => require(['../views/news/Index'], resolve);
const News = resolve => require(['../views/news/News'], resolve);

const MineIndex = resolve => require(['../views/mine/Index'], resolve);
const Mine = resolve => require(['../views/mine/Mine'], resolve);
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
    }, {
      path: '/experience',
      component: ExperienceIndex,
      name: 'ExperienceIndex',
      meta: {
        title: '经验'
      },
      children: [{
        path: '/',
        component: Experience,
        name: 'Experience',
        meta: {
          title: '发现'
        }
      }]
    }, {
      path: '/ring',
      component: RingIndex,
      name: 'RingIndex',
      meta: {
        title: 'U圈'
      },
      children: [{
        path: '/',
        component: Ring,
        name: 'Ring',
        meta: {
          title: 'U圈'
        }
      }]
    }, {
      path: '/news',
      component: NewsIndex,
      name: 'NewsIndex',
      meta: {
        title: '消息'
      },
      children: [{
        path: '/',
        component: News,
        name: 'News',
        meta: {
          title: '消息'
        }
      }]
    }, {
      path: '/mine',
      component: MineIndex,
      name: 'MineIndex',
      meta: {
        title: '我的'
      },
      children: [{
        path: '/',
        component: Mine,
        name: 'Mine',
        meta: {
          title: '我的'
        }
      }]
    }]
});
