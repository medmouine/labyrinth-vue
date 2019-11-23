import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './authentication/module';
import user from './user/module';
import maze from './maze/module';
import game from './game/module';
import {firestoreAction, vuexfireMutations} from "vuexfire";
import db from "../database/db";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {
    ...vuexfireMutations,
  },
  actions: {
  },
  modules: { authentication, user, maze, game }
});
