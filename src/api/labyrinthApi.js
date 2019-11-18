import Vue from 'vue';

const signIn = signinData => {
  return Vue.axios.post(
    'https://labyrinth-api.herokuapp.com/api/users/signin',
    signinData
  );
};

const fetchCurrentUser = () => {
  return Vue.axios.get('https://labyrinth-api.herokuapp.com/api/users/current');
};

export default { signIn, fetchCurrentUser };
