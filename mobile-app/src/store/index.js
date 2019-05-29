import Vue from 'vue';
import Vuex from 'vuex';
import basicSettings from './modules/basicSettings';
import getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    basicSettings
  },
  getters
});

export default store;
