<template>
  <div class="user" v-bind:class="{ current: isCurrent }">
    <img v-bind:src="player.avatar" class="avatar" />
    <input v-if="isCurrent" v-bind:value="player.username" class="input" />
    <big v-else>{{ player.username }}</big>
    <IsReady v-bind:isReady="player.isLoggedIn" class="isReady" />
  </div>
</template>
<script>
import IsReady from '@/components/IsReady';
export default {
  name: 'LobbyPlayer',
  props: {
    player: Object,
    isCurrent: Boolean
  },
  components: {
    IsReady
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