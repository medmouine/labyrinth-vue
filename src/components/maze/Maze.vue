<template>
  <div id="maze">
    <div v-if="this.mazeIsLoaded" id="maze-wrapper">
      <KeyBoardDirectionListener
              v-bind:on-direction-press="(direction) => this.move({playerId: this.currentPlayer.id, direction: direction})"/>
      <div v-bind:key="row.index" class="row" v-for="row in maze.grid">
        <div
                class="cell"
                v-bind:key="cell.index"
                v-bind:class="{
          north: !cell.isEntry && cell.row === 0,
          east:
            cell.column === maze.grid.length - 1 || !cell.isLinked(cell.east),
          south: !cell.isEnd && (cell.row === row.length - 1 || !cell.isLinked(cell.south)),
          west: cell.column === 0,
        }"
                v-for="cell in row"
        >
          <div class="player-container">
            <img
                    v-if="
                    !!players.length
                     && players[0].isLoggedIn
                    && players[0].position.x === cell.row
                    && players[0].position.y === cell.column"
                    v-bind:class="{
            onePlayer: countPlayersInCell(cell, players) === 1,
            moreThanOnePlayer: countPlayersInCell(cell, players) !== 1}"
                    src="https://cdn4.iconfinder.com/data/icons/reaction/32/angry-512.png">
            <img
                    v-if="
                                        !!players.length &&
                                        players[1].isLoggedIn
            && players[1].position.x === cell.row
            && players[1].position.y === cell.column"
                    v-bind:class="{
            onePlayer: countPlayersInCell(cell, players) === 1,
            moreThanOnePlayer: countPlayersInCell(cell, players) !== 1}"
                    src="https://clipart.info/images/ccovers/1499793243facebook-wow-emoji-like-png.png">
            <img
                    v-if="!!players.length
                            && players[2].isLoggedIn
                            && players[2].position.x === cell.row
                            && players[2].position.y === cell.column"
                    v-bind:class="{
            onePlayer: countPlayersInCell(cell, players) === 1,
            moreThanOnePlayer: countPlayersInCell(cell, players) !== 1}"
                    src="https://clipart.info/images/ccovers/1499793247facebook-sad-emoji-like-png.png">
            <img
                    v-if="!!players.length
                            && players[3].isLoggedIn
            && players[3].position.x === cell.row
            && players[3].position.y === cell.column"
                    v-bind:class="{
            onePlayer: countPlayersInCell(cell, players) === 1,
            moreThanOnePlayer: countPlayersInCell(cell, players) !== 1}"
                    src="https://c7.uihere.com/files/707/881/246/facebook-like-button-facebook-like-button-clip-art-facebook-reaction.jpg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex';
  import KeyBoardDirectionListener from "../KeyBoardDirectionListener";
  import db from '../../database/db';

  export default {
    name: 'Maze',
    components: {
      KeyBoardDirectionListener
    },
    data: () => ({
      players: []
    }),

    firestore: {
      players: db.collection('players'),
    },
    computed: {
      ...mapGetters('maze', ['maze', 'mazeIsLoaded']),
      ...mapGetters('game', ['numberOfPlayers', 'currentPlayer'])
    },
    methods: {
      ...mapActions('maze', ['initMaze']),
      ...mapActions('game', ['move']),
      countPlayersInCell(cell, allPlayers) {
        return allPlayers.filter(p => p.position.x === cell.row && p.position.y === cell.column).length
      },
    },
    async created() {
      this.initMaze();

      console.log(this.players)
    }
  };
</script>

<style lang="scss">
  #maze {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4em;

    .player-container {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
    }

    .onePlayer {
      max-width: 100%;
    }

    .moreThanOnePlayer {
      max-width: 50%;
    }

    .row {
      display: flex;
      flex-direction: row;

      .cell {
        font-size: 1.5em;
        width: 1.5em;
        height: 1.5em;
        border: solid white;

        &.north {
          border-top: solid;
        }

        &.east {
          border-right: solid;
        }

        &.south {
          border-bottom: solid;
        }

        &.west {
          border-left: solid;
        }
      }
    }
  }
</style>
