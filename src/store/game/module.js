import GameStatus from "../../model/game/GameStatus";
import db from "../../database/db";

const initialState = {
  winner: {},
  status: GameStatus.IDLE,
  players: [
    {
      isCurrentPlayer: false,
      id: 0,
      isLoggedIn: true,
      position: {
        x: -1,
        y: -1
      },
      avatar: 'https://cdn4.iconfinder.com/data/icons/reaction/32/angry-512.png',
      username: '',
    },
    {
      isCurrentPlayer: false,
      id: 1,
      isLoggedIn: false,
      position: {
        x: -1,
        y: -1
      },
      avatar: 'https://clipart.info/images/ccovers/1499793243facebook-wow-emoji-like-png.png',
      username: '',
    },
    {
      isCurrentPlayer: false,
      id: 2,
      isLoggedIn: false,
      position: {
        x: -1,
        y: -1
      },
      avatar: 'https://clipart.info/images/ccovers/1499793247facebook-sad-emoji-like-png.png',
      username: '',
    },
    {
      isCurrentPlayer: false,
      id: 3,
      isLoggedIn: false,
      position: {
        x: -1,
        y: -1
      },
      avatar: 'https://c7.uihere.com/files/707/881/246/facebook-like-button-facebook-like-button-clip-art-facebook-reaction.jpg',
      username: '',
    }]
};


export default {
  namespaced: true,
  state: initialState,
  getters: {
    players: state => state.players,
    currentPlayer: state => state.players.find(p => p.isCurrentPlayer),
    numberOfPlayers: state => state.players.filter((p) => p.isLoggedIn).length,
    gameStatus: state => state.status,
    winner: state => state.winner
  },
  mutations: {
    updatePlayerPosition: (state, { playerId, newPosition }) =>
      (state.players[playerId].position = newPosition),
    updateGameStatus: (state, newStatus) =>
      (state.status = newStatus),
    setWinner: (state, player) =>
      (state.winner = player),
    updateUsername: (state, { playerId, newUsername }) => {
      state.players[playerId].username = newUsername;
      state.players[playerId].isLoggedIn = true;
    }
  },
  actions: {
    async move({ commit, getters, dispatch, rootGetters }, { playerId, direction }) {
      const maze = rootGetters['maze/maze'];
      const currentPosition = getters.players.find(p => p.id == playerId).position;
      const nextCell = maze.getCell(currentPosition.x + direction.x, currentPosition.y + direction.y);
      const currentCell = maze.getCell(currentPosition.x, currentPosition.y);
      if (!!nextCell && currentCell.isLinked(nextCell)) {
        commit('updatePlayerPosition', { playerId, newPosition: { x: nextCell.row, y: nextCell.column } });
        await db.collection('players')
          .doc('player' + playerId)
          .set({ id: playerId, isLoggedIn: true, position: { x: nextCell.row, y: nextCell.column } });
        if (nextCell.row === maze.rows - 1 && nextCell.column === maze.columns - 1) {
          dispatch('endGame', playerId);
        }
      }
    },
    async startGame({ commit, getters }) {
      await getters.players
        .filter(p => p.isLoggedIn)
        .forEach(async (p) => {
          commit('updatePlayerPosition', { playerId: p.id, newPosition: { x: 0, y: 0 } });
          commit('updateGameStatus', GameStatus.STARTED);
          await db.collection('players')
            .doc('player' + p.id)
            .set({ id: p.id, isLoggedIn: true, position: { x: 0, y: 0 }, ...p });
          await db.collection('game')
            .doc('game')
            .set({ status: GameStatus.STARTED });
        });
    },
    async endGame({ commit, getters }, winnerId) {
      const winner = getters.players.find(p => p.id == winnerId);
      commit('updateGameStatus', GameStatus.ENDED);
      commit('setWinner', winner);
      await db.collection('game')
        .doc('game')
        .set({ status: GameStatus.ENDED, winner: winner });
      console.log('WINNER IS ', winner);
    },
    async setUsername({ commit, getters }, { playerId, newUsername }) {
      const player = getters.players.find(p => p.id == playerId);
      commit('updateUsername', { playerId, newUsername });
      await db.collection('players')
        .doc('player' + playerId)
        .set({ username: newUsername, isLoggedIn: true, ...player });
    },
  }
};
