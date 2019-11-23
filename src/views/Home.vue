<template>
  <div class="home">
    <div class="header">
      <h1>Bienvenue au Labyrinthe</h1>
      <h2>Veuillez attendre les autres joueurs</h2>
    </div>

    <div class="users">
      <div v-for="(player, index) of players" v-bind:key="index" class="user">
        <img v-bind:src="images[index]" class="avatar" />
        <big>Joueur {{ player.id + 1 }}</big>
        <IsReady v-bind:isReady="player.isLoggedIn" />
      </div>
    </div>
  </div>
</template>

<script>
import IsReady from '@/components/IsReady';
import db from '@/database/db';

// we can also use `$firebaseRefs.user` to refer to the bound user reference
//this.$firebaseRefs.user.set(user)
export default {
  name: 'Home',
  components: { IsReady },
  data: () => ({
    images: [
      'https://cdn4.iconfinder.com/data/icons/reaction/32/angry-512.png',
      'https://clipart.info/images/ccovers/1499793243facebook-wow-emoji-like-png.png',
      'https://clipart.info/images/ccovers/1499793247facebook-sad-emoji-like-png.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAMHO5MPBu6ztKy20_DfCT6fMTtZFZ2MfO0AuhumDliiYPUXUE&s'
    ],
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

.header {
  background-color: #fb3;
  color: white;
}

.users {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1;
  margin-top: 128px;
}

.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin-bottom: 8px;
}

.avatar {
  width: 128px;
  margin-bottom: 8px;
}
</style>
