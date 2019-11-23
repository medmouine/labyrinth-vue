<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <KeyBoardDirectionListener />
  </div>
</template>

<script>
import KeyBoardDirectionListener from '@/components/KeyBoardDirectionListener.vue';
// we can also use `$firebaseRefs.user` to refer to the bound user reference
//this.$firebaseRefs.user.set(user)
export default {
  name: 'Home',
  components: {
    KeyBoardDirectionListener
  },
};
</script>
