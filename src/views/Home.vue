<template>
  <div class="home">
    <div class="header">
      <h1>Bienvenue au Labyrinthe</h1>
      <h2>Veuillez attendre les autres joueurs</h2>
    </div>

    <div class="users">
      <div v-for="(player, index) of players" v-bind:key="index">
        <LobbyPlayer
          v-bind:player="player"
          v-bind:isCurrent="isCurrentPlayer(player)"
        />
      </div>
    </div>
    <div class="buttons">
      <button
        :disabled="
          players.filter(p => !!p.username && p.username !== '').length > 1
        "
        class="begin"
      >
        Commencer
      </button>
      <p
        v-if="
          players.filter(p => !!p.username && p.username !== '').length <= 1
        "
      >
        Two or more players need to be connected and set a username to start
      </p>
      <select class="select">
        <option value="beginner">Débutant</option>
        <option value="advanced">Avancé</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
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
  },
  methods: {
    isCurrentPlayer: player => {
      return player.id === `player${localStorage.getItem('currentPlayerId')}`;
    }
  },
  computed: {
    ...mapGetters('game', ['players'])
  },
  mounted: async () => {
    if (!localStorage.getItem('currentPlayerId')) {
      const querySnapshot = await db.collection('players').get();
      const currentPlayer = querySnapshot.docs
        .find(p => !p.data().isLoggedIn)
        .data();
      const currentPlayerId = currentPlayer.id;

      db.collection('players')
        .doc(`player${currentPlayerId}`)
        .set({ ...currentPlayer, isLoggedIn: true });

      localStorage.setItem('currentPlayerId', currentPlayerId);
    }
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

.header {
  background-color: #fb3;
  color: white;
}

.users {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 128px;
}

.begin {
  color: #fff;
  text-decoration: none;
  background: #639;
  padding: 16px;
  border-radius: 4px;
  display: inline-block;
  border: none;
  font-size: 100%;
  transition: all 0.4s ease 0s;
  font-weight: bold;
  margin-right: 32px;
}
.begin:hover {
  text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
  box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  transition: all 0.4s ease 0s;
}
.buttons {
  margin-top: 32px;
}
.select {
  color: #fff;
  text-decoration: none;
  background: #fb3;
  padding: 16px;
  border-radius: 4px;
  display: inline-block;
  border: none;
  font-size: 100%;
  transition: all 0.4s ease 0s;
  margin-right: 32px;
}
</style>
