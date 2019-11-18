import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './authentication/module';
import user from './user/module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { authentication, user }
});
