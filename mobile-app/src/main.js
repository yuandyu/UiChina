/* eslint-disable no-console */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
require('./common/css/common.scss');
import 'lib-flexible/flexible.js'
import store from './store/index';
Vue.config.productionTip = false;

// 屏幕超高750时，限制屏幕宽度
let htmlwidth = document.documentElement.clientWidth || document.body.clientWidth;
let htmlBody = document.getElementsByTagName('body')[0];
if(htmlwidth > 750) {
  htmlwidth = 750;
}
store.state.basicSettings.width = htmlwidth;
htmlBody.style.width = htmlwidth + 'px';
htmlBody.style.margin = '0 auto';

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

