<template>
  <div class="home">
    <div class="header">
      <h1>Bienvenue au Labyrinthe</h1>
      <h2>Veuillez attendre les autres joueurs</h2>
    </div>

    <div class="users">
      <div v-for="(player, index) of players" v-bind:key="index">
        <LobbyPlayer v-if="index===0" v-bind:player="player" v-bind:isCurrent="true" />
        <LobbyPlayer v-else v-bind:player="player" v-bind:isCurrent="false" />
      </div>
    </div>
  </div>
</template>

<script>
import LobbyPlayer from '@/components/LobbyPlayer'
export default {
  name: 'Home',
  components: {
    LobbyPlayer
  },
  data: () => ({
    players: [
      { id: 0, isLoggedIn: false, username: 'henlo', avatar: 'https://cdn4.iconfinder.com/data/icons/reaction/32/angry-512.png'},
      { id: 1, isLoggedIn: true, username: undefined, avatar: 'https://clipart.info/images/ccovers/1499793243facebook-wow-emoji-like-png.png'},
      { id: 2, isLoggedIn: true, username: undefined, avatar: 'https://clipart.info/images/ccovers/1499793247facebook-sad-emoji-like-png.png'},
      { id: 3, isLoggedIn: false, username: undefined, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAMHO5MPBu6ztKy20_DfCT6fMTtZFZ2MfO0AuhumDliiYPUXUE&'}
    ]
  })
};
</script>

<style>
.home {
  height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100vw;
}

.users {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1;
  margin-top: 128px;
}
</style>
