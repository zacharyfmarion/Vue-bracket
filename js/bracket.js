/**
 * The JSON data structure that defines a team
 */
const tournament = [
  //-- Round 1
  [
    [
      {
        name: 'Player 111',
        winner: true,
        ID: 111,
        url: 'http://www.google.com',
      },
      { name: 'Player 211', ID: 211 },
    ],

    [
      { name: 'Player 112', winner: true, ID: 112 },
      { name: 'Player 212', ID: 212 },
    ],

    [
      { name: 'Player 113', winner: true, ID: 113 },
      { name: 'Player 213', ID: 213 },
    ],

    [
      { name: 'Player 114', ID: 114 },
      { name: 'Player 214', winner: true, ID: 214 },
    ],

    [
      { name: 'Player 115', winner: true, ID: 115, url: 'goggle.com' },
      { name: 'Player 215', ID: 215 },
    ],

    [
      { name: 'Player 116', winner: true, ID: 116 },
      { name: 'Player 216', ID: 216 },
    ],

    [
      { name: 'Player 117', winner: true, ID: 117 },
      { name: 'Player 217', ID: 217 },
    ],

    [
      { name: 'Player 118', ID: 118 },
      { name: 'Player 218', winner: true, ID: 218 },
    ],
  ],

  //-- Round 2
  [
    [
      { name: 'Player 111', winner: true, ID: 111 },
      { name: 'Player 212', ID: 212 },
    ],

    [
      { name: 'Player 113', winner: true, ID: 113 },
      { name: 'Player 214', ID: 214 },
    ],

    [
      { name: 'Player 115', winner: true, ID: 115 },
      { name: 'Player 216', ID: 216 },
    ],

    [
      { name: 'Player 117', ID: 117 },
      { name: 'Player 218', winner: true, ID: 218 },
    ],
  ],

  //-- Round 3
  [
    [
      { name: 'Player 111', ID: 111 },
      { name: 'Player 113', winner: true, ID: 113 },
    ],

    [
      { name: 'Player 115', ID: 115 },
      { name: 'Player 218', winner: true, ID: 218 },
    ],
  ],

  //-- Round 4
  [
    [
      { name: 'Player 113', winner: true, ID: 113 },
      { name: 'Player 218', winner: true, ID: 218 },
    ],
  ],
  //-- Champion
  [[{ name: 'Player 113', winner: true, ID: 113 }]],
];

Vue.component('vue-bracket', {
  props: {
    /**
     * An array of rounds, which are themselves arrays
     * of individual matches
     */
    tournament: {
      type: Array,
      required: true,
    },
  },
  template: `
    <div class="tournament">
      <ul class="round" v-for="round in tournament">
        <template v-for="(match, index) in round" v-if="match.length > 1">
          <li class="spacer">&nbsp;</li>
          <li class="game game-top" :class="{winner: match[0].winner}">{{match[0].name}}</li>
          <li class="game game-spacer">&nbsp;</li>
          <li class="game game-bottom" :class="{winner: match[1].winner}">{{match[1].name}}</li>
          <li class="spacer" v-if="index === round.length -1">&nbsp;</li>
        </template>
        <template v-for="(match, index) in round" v-if="match.length === 1">
          <li class="game game-top winner">{{match[0].name}}</li>
        </template>
      </ul>
    </div> 
  `,
});

const app = new Vue({
  el: '#app',
  data: {
    tournament: tournament,
  },
});
