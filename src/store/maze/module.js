import {generateMaze} from "./mazeGenerator";

const initialState = {
  maze: undefined,
  isLoaded: false,
};

export default {
  namespaced: true,
  state: initialState,
  getters: {
    maze: state => state.maze,
    mazeIsLoaded: state => state.isLoaded,
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
