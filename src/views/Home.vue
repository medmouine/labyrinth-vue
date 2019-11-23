<template>
  <div class="home">
    <div class="header">
      <h1>Bienvenue au Labyrinthe</h1>
      <h2>Veuillez attendre les autres joueurs</h2>
    </div>

    <div class="users">
      <div v-for="(player, index) of players" v-bind:key="index">
        <LobbyPlayer
          v-if="index === 0"
          v-bind:player="player"
          v-bind:isCurrent="true"
        />
        <LobbyPlayer v-else v-bind:player="player" v-bind:isCurrent="false" />
      </div>
    </div>
  </div>
</template>

<script>
import LobbyPlayer from '@/components/LobbyPlayer';
import db from '@/database/db';
export default {
  name: 'Home',
  components: {
    LobbyPlayer
  },
  data: () => ({
    players: []
  }),
  firestore: {
    players: db.collection('players')
  }
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
