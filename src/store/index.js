import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const defaultSigninError = {
  email: null,
  password: null
};

export default new Vuex.Store({
  state: {
    signinIn: false,
    signinError: { ...defaultSigninError }
  },
  getters: {
    signingIn: state => {
      return state.signinIn;
    },
    signinErrors: state => {
      return state.signinError;
    }
  },
  mutations: {
    signinStart: state => {
      state.signinIn = true;
    },
    signinStop: (state, errorMessage) => {
      state.signinIn = false;
      state.signinError = { ...defaultSigninError, ...errorMessage };
    }
  },
  actions: {
    signIn({ commit }, signinData) {
      commit('signinStart');

      const promise = axios.post(
        'https://labyrinth-api.herokuapp.com/api/users/signin',
        {
          ...signinData
        }
      );

      promise
        .then(response => {
          localStorage.setItem('accessToken', response.data.token);
          commit('signinStop', null);
        })
        .catch(error => {
          commit('signinStop', error.response.data);
        });

      return promise;
    },
    signOut() {
      localStorage.removeItem('accessToken');
    }
  },
  modules: {}
});
