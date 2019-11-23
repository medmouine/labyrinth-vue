import {generateMaze} from "./mazeGenerator";

const initialState = {
  maze: undefined,
  isLoaded: false,
  players: [
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
    },
    {
      id: 4,
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
    maze: state => state.maze,
    mazeIsLoaded: state => state.isLoaded,
    players: state => state.players,
    numberOfPlayers: state => state.players.filter((p) => p.isLoggedIn).length
  },
  mutations: {
    updatePlayerPosition: (state, playerId, newPosition) =>
        (state.players[playerId].position = newPosition),
    setMaze: (state, maze) => {
      state.maze = maze;
      state.isLoaded = true;
    }
  },
  actions: {
    initMaze({commit}) {
      const maze = generateMaze();
      commit('setMaze', maze);
      console.log('Maze Setup DONE')
    }
  }
};
