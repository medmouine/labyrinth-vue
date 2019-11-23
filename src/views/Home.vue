<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <KeyBoardDirectionListener />
  </div>
</template>

<script>
import KeyBoardDirectionListener from '@/components/KeyBoardDirectionListener.vue';

import db from '../database/db';

db.ref('players/player1')
  .set({ id: 0, isLoggedIn: true, position: { x: 0, y: 1 } })
  .then(() => {
    console.log('user updated!');
  });

// we can also use `$firebaseRefs.user` to refer to the bound user reference
//this.$firebaseRefs.user.set(user)
export default {
  name: 'Home',
  components: {
    KeyBoardDirectionListener
  }
};
</script>
