Vue.use(VueFire);

// initializing the firebase app
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBT9ZJs9833sZMW75iijRybJvbiB1-uiHA',
  authDomain: 'ncaa-1651a.firebaseapp.com',
  databaseURL: 'https://ncaa-1651a.firebaseio.com',
  projectId: 'ncaa-1651a',
  storageBucket: 'ncaa-1651a.appspot.com',
  messagingSenderId: '185987353393',
});

// helper function to get the range of valid years
function getValidYears(startYear, endYear) {
  let validYears = [];
  for (let year = startYear; year <= endYear; year++) {
    validYears.push(year);
  }
  return validYears;
}

validYears = getValidYears(1985, 2017);

// Getting references to the firebase database
const db = firebaseApp.database();
const rootRef = db.ref();

// empty bracket that gets sent to firebase when a user initially
// create a new one...note that we use false because firebase does
// not store null values
const emptyBracket = [
  [
    [
      {
        seed: 1,
        name: 'Xavier',
      },
      {
        seed: 16,
        name: 'Texas Southern',
      },
    ],
    [
      {
        seed: 8,
        name: 'Missouri',
      },
      {
        seed: 9,
        name: 'Florida State',
      },
    ],
    [
      {
        seed: 5,
        name: 'Ohio State',
      },
      {
        seed: 12,
        name: 'South Dakota State',
      },
    ],
    [
      {
        seed: 4,
        name: 'Gonzaga',
      },
      {
        seed: 13,
        name: 'North Carolina-Greensboro',
      },
    ],
    [
      {
        seed: 6,
        name: 'Houston',
      },
      {
        seed: 11,
        name: 'San Diego State',
      },
    ],
    [
      {
        seed: 3,
        name: 'Michigan',
      },
      {
        seed: 14,
        name: 'Montana',
      },
    ],
    [
      {
        seed: 7,
        name: 'Texas A&M',
      },
      {
        seed: 10,
        name: 'Providence',
      },
    ],
    [
      {
        seed: 2,
        name: 'North Carolina',
      },
      {
        seed: 15,
        name: 'Lipscomb',
      },
    ],
    [
      {
        seed: 1,
        name: 'Villanova',
      },
      {
        seed: 16,
        name: 'Radford',
      },
    ],
    [
      {
        seed: 8,
        name: 'Virginia Tech',
      },
      {
        seed: 9,
        name: 'Alabama',
      },
    ],
    [
      {
        seed: 5,
        name: 'West Virginia',
      },
      {
        seed: 12,
        name: 'Murray State',
      },
    ],
    [
      {
        seed: 4,
        name: 'Wichita State',
      },
      {
        seed: 13,
        name: 'Marshall',
      },
    ],
    [
      {
        seed: 6,
        name: 'Florida',
      },
      {
        seed: 11,
        name: 'St. Bonaventure',
      },
    ],
    [
      {
        seed: 3,
        name: 'Texas Tech',
      },
      {
        seed: 14,
        name: 'Stephen F. Austin',
      },
    ],
    [
      {
        seed: 7,
        name: 'Arkansas',
      },
      {
        seed: 10,
        name: 'Butler',
      },
    ],
    [
      {
        seed: 2,
        name: 'Purdue',
      },
      {
        seed: 15,
        name: 'Cal State Fullerton',
      },
    ],
    [
      {
        seed: 1,
        name: 'Kansas',
      },
      {
        seed: 16,
        name: 'Pennsylvania',
      },
    ],
    [
      {
        seed: 8,
        name: 'Seton Hall',
      },
      {
        seed: 9,
        name: 'North Carolina State',
      },
    ],
    [
      {
        seed: 5,
        name: 'Clemson',
      },
      {
        seed: 12,
        name: 'New Mexico State',
      },
    ],
    [
      {
        seed: 4,
        name: 'Auburn',
      },
      {
        seed: 13,
        name: 'College of Charleston',
      },
    ],
    [
      {
        seed: 6,
        name: 'Texas Christian',
      },
      {
        seed: 11,
        name: 'Syracuse',
      },
    ],
    [
      {
        seed: 3,
        name: 'Michigan State',
      },
      {
        seed: 14,
        name: 'Bucknell',
      },
    ],
    [
      {
        seed: 7,
        name: 'Rhode Island',
      },
      {
        seed: 10,
        name: 'Oklahoma',
      },
    ],
    [
      {
        seed: 2,
        name: 'Duke',
      },
      {
        seed: 15,
        name: 'Iona',
      },
    ],
    [
      {
        seed: 1,
        name: 'Virginia',
      },
      {
        seed: 16,
        name: 'Maryland-Baltimore County',
      },
    ],
    [
      {
        seed: 8,
        name: 'Creighton',
      },
      {
        seed: 9,
        name: 'Kansas State',
      },
    ],
    [
      {
        seed: 5,
        name: 'Kentucky',
      },
      {
        seed: 12,
        name: 'Davidson',
      },
    ],
    [
      {
        seed: 4,
        name: 'Arizona',
      },
      {
        seed: 13,
        name: 'Buffalo',
      },
    ],
    [
      {
        seed: 6,
        name: 'Miami (FL)',
      },
      {
        seed: 11,
        name: 'Loyola (IL)',
      },
    ],
    [
      {
        seed: 3,
        name: 'Tennessee',
      },
      {
        seed: 14,
        name: 'Wright State',
      },
    ],
    [
      {
        seed: 7,
        name: 'Nevada',
      },
      {
        seed: 10,
        name: 'Texas',
      },
    ],
    [
      {
        seed: 2,
        name: 'Cincinnati',
      },
      {
        seed: 15,
        name: 'Georgia State',
      },
    ],
  ],
  [
    [false, false],
    [false, false],
    [false, false],
    [false, false],
    [false, false],
    [false, false],
    [false, false],
    [false, false],
    [false, false],
    [false, false],
    [false, false],
    [false, false],
    [false, false],
    [false, false],
    [false, false],
    [false, false],
  ],
  [
    [false, false],
    [false, false],
    [false, false],
    [false, false],
    [false, false],
    [false, false],
    [false, false],
    [false, false],
  ],
  [[false, false], [false, false], [false, false], [false, false]],
  [[false, false], [false, false]],
  [[false, false]],
];

// A team which is displayed on the bracket.
Vue.component('bracket-team', {
  props: {
    team: {
      type: Object,
    },
    // array of two teams that are competing in the round
    // passed in if team is undefined
    teams: {
      type: Array,
    },
    bottom: {
      type: Boolean,
    },
    onWinnerSelected: {
      type: Function,
    },
    onWinnerRemoved: {
      type: Function,
    },
  },
  template: `
    <li class="game" :class="{'game-top': !bottom, 'game-bottom': bottom, winner: team && team.winner}">
      <span v-if="team">{{team.name}}</span> 
      <div v-if="!team && !!teams">
        <select :value="team ? team.name : ''" @change="handleTeamSelect">
          <option v-for="(competitor, index) in teams" :value="index">{{competitor.name}}</option>
        </select>
        <button @click="onWinnerRemoved">x</button>
      </div>
    </li>
  `,
  methods: {
    handleTeamSelect: function(e) {
      e.preventDefault();
      this.onWinnerSelected(e.target.value);
    },
  },
});

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
    /**
     * Method that is called when the user selects a team to win a match
     */
    onWinnerSelected: {
      type: Function,
      required: false,
    },
    /**
     * Function to remove a selection...note that the subsequent selections
     * in later rounds that depend on this team need to be updated
     */
    onWinnerRemoved: {
      type: Function,
      required: false,
    },
  },
  template: `
    <div class="tournament">
      <ul class="round" v-for="(round, roundIndex) in tournament">
        <template v-for="(match, matchIndex) in round" v-if="match.length > 1">
          <li class="spacer">&nbsp;</li>
          <bracket-team 
            :team="match[0]" 
            :teams="getTeams(roundIndex, matchIndex, 0)"
            :onWinnerSelected="handleWinnerSelected(roundIndex, matchIndex, 0)" 
            :onWinnerRemoved="handleWinnerRemoved(roundIndex, matchIndex, 0)">
          </bracket-team>
          <li class="game game-spacer">&nbsp;</li>
          <bracket-team 
            bottom
            :team="match[1]" 
            :teams="getTeams(roundIndex, matchIndex, 1)"
            :onWinnerSelected="handleWinnerSelected(roundIndex, matchIndex, 1)" 
            :onWinnerRemoved="handleWinnerRemoved(roundIndex, matchIndex, 1)">
          </bracket-team>
          <li class="spacer" v-if="matchIndex === round.length -1">&nbsp;</li>
        </template>
        <template v-for="(match, matchIndex) in round" v-if="match.length === 1">
          <bracket-team 
            :team="match[0]" 
            :teams="getTeams(roundIndex, matchIndex, 0)"
            :onWinnerSelected="handleWinnerSelected(roundIndex, matchIndex, 0)" 
            :onWinnerRemoved="handleWinnerRemoved(roundIndex, matchIndex, 0)">
          </bracket-team>
        </template>
      </ul>
    </div> 
  `,
  methods: {
    /**
     * Validates whether or not the data represents a valid
     * tournament data structure.
     */
    validateTounament: function() {
      return true;
    },
    /**
     * Get the two teams that competed in the previous round. The winner
     * will be displayed in the bracket-team component when it is chosen
     * @param Number {roundIndex} - Which round the team is currently competing in
     * @param Number {matchIndex} - Index of the match within the round
     * @param Number {teamIndex} - Index of the team within the match (either 0 or 1)
     */
    getTeams: function(roundIndex, matchIndex, teamIndex) {
      // no previous round, can't get the two teams that competed
      if (roundIndex === 0) {
        return null;
      }
      const previousRound = this.tournament[roundIndex - 1][
        (matchIndex + 1) * 2 - (1 - teamIndex) - 1
      ];
      if (!previousRound[0] || !previousRound[1]) {
        return null;
      }
      return previousRound;
    },
    // handlers for passing the correct information in a bound function
    handleWinnerSelected: function(roundIndex, matchIndex, teamIndex) {
      if (!this.onWinnerSelected) return null;
      return index =>
        this.onWinnerSelected(
          roundIndex - 1,
          (matchIndex + 1) * 2 - (1 - teamIndex) - 1,
          index
        );
    },
    handleWinnerRemoved: function(roundIndex, matchIndex, teamIndex) {
      if (!this.onWinnerRemoved) return null;
      return () => this.onWinnerRemoved(roundIndex, matchIndex, teamIndex);
    },
  },
});

// Just an organizational component representing the tab where you can create
// a bracket
Vue.component('create-bracket', {
  template: `
    <div>
      <div v-if="!tournament" class="flex">
        <el-input placeholder="Student netid" v-model="netId"></el-input>
        <el-button type="primary" @click="createBracket">Create Bracket</el-button>
      </div>
      <div v-else>
        <vue-bracket v-bind="{tournament, onWinnerSelected, onWinnerRemoved}">
        </vue-bracket>
      </div>
    </div> 
  `,
  data: function() {
    return {
      netId: '',
      tournament: null,
    };
  },
  methods: {
    createBracket: function() {
      rootRef
        .child('brackets')
        .child(this.netId)
        .set(emptyBracket)
        .then(() => {
          this.tournament = emptyBracket;
        });
    },
    onWinnerSelected: function(roundIndex, matchIndex, teamIndex) {
      console.log('selecting winnner', roundIndex, matchIndex, teamIndex);
    },
    onWinnerRemoved: function(roundIndex, matchIndex, teamIndex) {
      console.log('removing winner', roundIndex, matchIndex, teamIndex);
    },
  },
});

const app = new Vue({
  el: '#app',
  data: function() {
    return {
      // The year to select from the tournament dropdown
      year: validYears[0],
      validYears: validYears,
      activeTab: 'create',
      displayType: 'tournaments',
      displayOptions: [
        {
          name: 'All together',
          id: 'tournaments',
        },
        {
          name: 'By Region',
          id: 'tournaments_by_region',
        },
      ],
      tournament: [],
      loading: true,
    };
  },
  created: function() {
    this.getTournament();
  },
  watch: {
    year: function(value) {
      this.getTournament();
    },
    displayType: function(value) {
      this.getTournament();
    },
  },
  computed: {
    // correctly ordering the region so that when they are displayed
    // separately the finals comes last
    regionOrder: function() {
      if (this.displayType === 'tournaments') return [];
      return Object.keys(this.tournament).sort((region1, region2) => {
        return (
          this.tournament[region2][0].length -
          this.tournament[region1][0].length
        );
      });
    },
  },
  methods: {
    getTournament: function() {
      this.loading = true;
      rootRef
        .child(this.displayType)
        .child(this.year)
        .once('value')
        .then(snapshot => {
          this.tournament = snapshot.val();
          console.log(this.tournament);
          this.loading = false;
        });
    },
    handleWinnerSelected: function() {},
    handleWinnerRemoved: function() {},
  },
});
