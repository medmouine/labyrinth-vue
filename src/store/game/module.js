import GameStatus from "../../model/game/GameStatus";

const initialState = {
  winner : {},
  status: GameStatus.IDLE,
  players: [
    {
      id: 0,
      isLoggedIn: false,
      position: {
        x: 0,
        y: 0
      }
    },
    {
      id: 1,
      isLoggedIn: false,
      position: {
        x: 0,
        y: 0
      }
    },
    {
      id: 2,
      isLoggedIn: false,
      position: {
        x: 0,
        y: 0
      }
    },
    {
      id: 3,
      isLoggedIn: false,
      position: {
        x: 0,
        y: 0
      }
    }]
};


export default {
  namespaced: true,
  state: initialState,
  getters: {
    players: state => state.players,
    numberOfPlayers: state => state.players.filter((p) => p.isLoggedIn).length,
    gameStatus: state => state.status,
    winner: state => state.winner
  },
  mutations: {
    updatePlayerPosition: (state, playerId, newPosition) =>
        (state.players[playerId].position = newPosition),
    updateGameStatus: (state, newStatus) =>
        (state.status = newStatus),
    updateWinner: (state, player)  =>
        state.winner = player
  },
  actions: {
    move({commit, getters}, playerId, move) {
      const maze = getters.maze.maze;
      const currentPosition = players.find(p => p.id === playerId).position;
      const nextCell = maze.getCell(currentPosition.x + move.x, currentPosition.y + move.y);
      const currentCell = maze.getCell(currentPosition.x, currentPosition.y);

      if (!!nextCell && currentCell.isLinked(nextCell)) {
        commit('updatePlayerPosition', playerId, newPos);
      }
    }
  }
};
