import GameStatus from "../../model/game/GameStatus";
import db from "../../database/db";
import { vuexfireMutations, firestoreAction } from 'vuexfire'

const initialState = {
  winner : {},
  status: GameStatus.IDLE,
  players: [
    {
      isCurrentPlayer: true,
      id: 0,
      isLoggedIn: true,
      position: {
        x: 0,
        y: 0
      },
      avatar: ''
    },
    {
      isCurrentPlayer: false,
      id: 1,
      isLoggedIn: false,
      position: {
        x: 0,
        y: 0
      },
      avatar: ''
    },
    {
      isCurrentPlayer: false,
      id: 2,
      isLoggedIn: false,
      position: {
        x: 0,
        y: 0
      },
      avatar: ''
    },
    {
      isCurrentPlayer: false,
      id: 3,
      isLoggedIn: false,
      position: {
        x: 0,
        y: 0
      },
      avatar: ''
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
    updatePlayerPosition: (state, {playerId, newPosition}) =>
        (state.players[playerId].position = newPosition || console.log(state)),
    updateGameStatus: (state, newStatus) =>
        (state.status = newStatus),
    updateWinner: (state, player)  =>
        (state.winner = player),
  },
  actions: {
    async move({commit, getters, _, rootGetters}, {playerId, direction}) {
      const maze = rootGetters['maze/maze'];
      const currentPosition = getters.players.find(p => p.id === playerId).position;
      const nextCell = maze.getCell(currentPosition.x + direction.x, currentPosition.y + direction.y);
      const currentCell = maze.getCell(currentPosition.x, currentPosition.y);
      if (!!nextCell && currentCell.isLinked(nextCell)) {
        commit('updatePlayerPosition', {playerId, newPosition: {x: nextCell.row, y: nextCell.column}});
        await db.collection('players')
            .doc('player' + playerId)
            .set({ id: playerId, isLoggedIn: true, position: {x: nextCell.row, y: nextCell.column} });
      }
    }
  }
};
