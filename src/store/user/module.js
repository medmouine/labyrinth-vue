import labyrinthApi from '../../api/labyrinthApi';

const defaultUser = {
  id: null,
  firstName: null,
  lastName: null,
  email: null
};

export default {
  namespaced: true,
  state: {
    user: { ...defaultUser }
  },
  getters: {
    user: state => {
      return state.user;
    }
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    }
  },
  actions: {
    fetchCurrentUser({ commit }) {
      const fetchUser = labyrinthApi.fetchCurrentUser();
      fetchUser
        .then(response => {
          const user = response.data;
          commit('setUser', { ...defaultUser, ...user });
        })
        .catch(_ => {
          commit('setUser', { ...defaultUser });
        });
      return fetchUser;
    }
  }
};
