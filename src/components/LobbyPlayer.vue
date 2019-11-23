<template>
  <div class="user">
    <img v-bind:src="player.avatar" class="avatar" />
    <input v-if="isCurrent" v-bind:value="player.username" class="input"/>
    <big v-else>Joueur {{ player.id + 1 }}</big>
    <IsReady v-bind:isReady="player.isLoggedIn" class="isReady" />
  </div>
</template>
<script>
import IsReady from '@/components/IsReady'
export default {
  name: "LobbyPlayer",
  props: {
    player: Object,
    isCurrent: Boolean
  },
  components: { 
    IsReady
   }
}
</script>
<style>
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin-bottom: 8px;
  pa
}
.avatar {
  width: 128px;
  margin-bottom: 8px;
}
.isReady {
  margin-top: 8px;
}
</style>