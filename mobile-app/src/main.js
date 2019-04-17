import Vue from 'vue'
import App from './App.vue'
import router from './router/index';
require('./common/css/common.scss');
import 'lib-flexible/flexible.js'
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

