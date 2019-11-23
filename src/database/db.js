import Vue from 'vue';
import firebase from 'firebase/app';
import 'firebase/firestore'
import { firestorePlugin } from 'vuefire';

Vue.use(firestorePlugin);

export default firebase
  .initializeApp({
    projectId: 'labyrithe-di'
  })
  .firestore();
