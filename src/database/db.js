import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/database';
import { rtdbPlugin } from 'vuefire';

Vue.use(rtdbPlugin);

export default firebase
  .initializeApp({
    databaseURL: 'https://labyrithe-di.firebaseio.com/'
  })
  .database();
