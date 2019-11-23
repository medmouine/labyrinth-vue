<template>
  <div class="user" v-bind:class="{ current: isCurrent }">
    <img v-bind:src="player.avatar" class="avatar" />
    <div  v-if="isCurrent">
      <input v-bind:value="player.username" class="input" v-on:change="(e) => this.handleChange(e.target.value)"/>
      <p>Press enter to save username</p>
    </div>
    <big v-else>{{ player.username }}</big>
    <IsReady v-bind:isReady="player.isLoggedIn" class="isReady" />
  </div>
</template>
<script>
import IsReady from '@/components/IsReady';
import {mapActions} from "vuex";
export default {
  name: 'LobbyPlayer',
  props: {
    player: Object,
    isCurrent: Boolean
  },
  components: {
    IsReady
  },
  methods: {
    ...mapActions('game', ['setUsername']),
    handleChange(value) {
      this.setUsername({playerId: localStorage.getItem('currentPlayerId'), newUsername: value});
    }
  }
};
</script>
<style>
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin-bottom: 8px;
  padding: 8px;
}
.avatar {
  width: 128px;
  margin-bottom: 8px;
}
.isReady {
  margin-top: 8px;
}
.current {
  box-shadow: 0 0 8px 8px lavender;
}
</style>