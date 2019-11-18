import axios from 'axios';

const signIn = signinData => {
  return axios.post(
    'https://labyrinth-api.herokuapp.com/api/users/signin',
    signinData
  );
};

export default { signIn };
