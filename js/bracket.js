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
const bracketsRef = db.ref('brackets');

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
      type: [Object, Boolean],
    },
    // array of two teams that are competing in the round
    // passed in if team is undefined
    teams: {
      type: Array,
    },
    bottom: {
      type: Boolean,
    },
    viewOnly: {
      type: Boolean,
    },
    winner: {
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
    <li class="game" :class="{'game-top': !bottom, 'game-bottom': bottom, winner}">
      <div v-if="team">
        <span>
          {{team.name}}
          <button @click="onWinnerRemoved" v-if="!viewOnly">x</button>
        </span> 
      </div>
      <div v-if="!team && !!teams">
        <select :value="'Select a team'" @change="handleTeamSelect" class="bracket-select">
          <option v-for="(competitor, index) in teams" :value="index">{{competitor.name}}</option>
        </select>
      </div>
    </li>
  `,
  methods: {
    handleTeamSelect: function(e) {
      e.preventDefault();
      this.onWinnerSelected(parseInt(e.target.value));
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
     * Whether or not to only show the team name and not the button
     * to edit the bracket
     */
    viewOnly: {
      type: Boolean,
      default: false,
    },
    /**
     * Method that is called when the user selects a team to win a match
     * @param Array - First parameter is an array containing [roundIndex, matchIndex, and teamIndex]
     * of the team from the previous round that was chosen to win
     * @param Array - Second param is an array containing [roundIndex, matchIndex, and teamIndex]
     * of the location the winner will inhabit in the data structure
     */
    onWinnerSelected: {
      type: Function,
      required: false,
      default: function() {
        return () => {};
      },
    },
    /**
     * Function to remove a selection...note that the subsequent selections
     * in later rounds that depend on this team need to be updated
     * @param Number {roundIndex} - Index of the round
     * @param Number {matchIndex} - Index of the match within the round
     * @param Number {teamIndex} - Index of the team (0 or 1) within the match
     */
    onWinnerRemoved: {
      type: Function,
      required: false,
      default: function() {
        return () => {};
      },
    },
  },
  template: `
    <div class="tournament">
      <ul class="round" v-for="(round, roundIndex) in tournament">
        <template v-for="(match, matchIndex) in round" v-if="match.length > 1">
          <li class="spacer">&nbsp;</li>
          <template v-for="(team, teamIndex) in match">
            <bracket-team 
              :bottom="teamIndex === 1"
              :team="match[teamIndex]" 
              :winner="checkWinner(match, teamIndex)"
              :viewOnly="viewOnly"
              :teams="getTeams(roundIndex, matchIndex, teamIndex)"
              :onWinnerSelected="handleWinnerSelected(roundIndex, matchIndex, teamIndex)" 
              :onWinnerRemoved="handleWinnerRemoved(roundIndex, matchIndex, teamIndex)">
            </bracket-team>
            <li 
              :class="{spacer: teamIndex === 1, game: teamIndex === 0, 'game-spacer': teamIndex === 0}"
              v-if="matchIndex === round.length -1 || teamIndex === 0">
                &nbsp;
            </li>
          </template>
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
    previousMatchIndex: function(matchIndex, teamIndex) {
      return (matchIndex + 1) * 2 + teamIndex - 2;
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
        this.previousMatchIndex(matchIndex, teamIndex)
      ];
      if (!previousRound[0] || !previousRound[1]) {
        return null;
      }
      return previousRound;
    },
    // get winner of current round
    checkWinner: function(match, teamIndex) {
      return teamIndex === 0
        ? match[0].score > match[1].score
        : match[1].score > match[0].score;
    },
    // handlers for passing the correct information in a bound function
    handleWinnerSelected: function(roundIndex, matchIndex, teamIndex) {
      return index =>
        this.onWinnerSelected(
          [
            roundIndex - 1,
            this.previousMatchIndex(matchIndex, teamIndex),
            index,
          ],
          [roundIndex, matchIndex, teamIndex]
        );
    },
    handleWinnerRemoved: function(roundIndex, matchIndex, teamIndex) {
      return () => this.onWinnerRemoved(roundIndex, matchIndex, teamIndex);
    },
  },
});

/**
 * -----------------------------------------------------------------------
 * Top Level tab components
 * -----------------------------------------------------------------------
 */

Vue.component('created-list-tab', {
  props: {
    onWinnerSelected: {
      type: Function,
    },
    onWinnerRemoved: {
      type: Function,
    },
  },
  firebase: {
    brackets: bracketsRef,
  },
  template: `
    <div>
      <el-select v-model="activeNetId" placeholder="Choose a netid">
        <el-option
          v-for="bracket in brackets"
          :key="bracket['.key']"
          :label="bracket['.key']"
          :value="bracket['.key']">
        </el-option>
      </el-select>  
      <div v-if="activeNetId">
        <vue-bracket 
          :tournament="activeBracket" 
          :onWinnerSelected="handleWinnerSelected" 
          :onWinnerRemoved="handleWinnerRemoved">
        </vue-bracket>
      </div>
    </div> 
  `,
  data: function() {
    return {
      activeNetId: null,
    };
  },
  computed: {
    activeBracket: function() {
      if (!this.activeNetId) return null;
      return this.brackets.find(
        bracket => bracket['.key'] === this.activeNetId
      )['.value'];
    },
  },
  methods: {
    // need to wrap this to pass in netId
    handleWinnerSelected: function(oldPath, newPath) {
      this.onWinnerSelected(oldPath, newPath, this.activeNetId);
    },
    // need to wrap this to pass in netId
    handleWinnerRemoved: function(roundIndex, matchIndex, teamIndex) {
      this.onWinnerRemoved(roundIndex, matchIndex, teamIndex, this.activeNetId);
    },
  },
});

// Just an organizational component representing the tab where you can create
// a bracket
Vue.component('create-bracket-tab', {
  props: {
    onWinnerSelected: {
      type: Function,
      required: false,
    },
    onWinnerRemoved: {
      type: Function,
      required: false,
    },
  },
  template: `
    <div>
      <div v-if="!tournament" class="flex">
        <el-input placeholder="Student netid" v-model="netId"></el-input>
        <el-button type="primary" @click="createBracket">Create Bracket</el-button>
      </div>
      <div v-else>
        <vue-bracket 
          :tournament="tournament" 
          :onWinnerSelected="handleWinnerSelected" 
          :onWinnerRemoved="handleWinnerRemoved">
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
      bracketsRef
        .child(this.netId)
        .set(emptyBracket)
        .then(() => {
          this.tournament = emptyBracket;
        });
      // add listener that watches for data changes
      bracketsRef.child(this.netId).on('value', snapshot => {
        this.tournament = snapshot.val();
      });
    },
    // need to wrap this to pass in netId
    handleWinnerSelected: function(oldPath, newPath) {
      this.onWinnerSelected(oldPath, newPath, this.netId);
    },
    // need to wrap this to pass in netId
    handleWinnerRemoved: function(roundIndex, matchIndex, teamIndex) {
      this.onWinnerRemoved(roundIndex, matchIndex, teamIndex, this.netId);
    },
  },
});

Vue.component('past-tournaments-tab', {
  template: `
    <div>
      <el-select v-model="year" placeholder="Select Year">
        <el-option v-for="validYear in validYears" :key="validYear" :label="validYear" :value="validYear">
        </el-option>
      </el-select>
      <el-select v-model="displayType" placeholder="Select Display Type">
        <el-option v-for="displayOption in displayOptions" :key="displayOption.id" :label="displayOption.name" :value="displayOption.id">
        </el-option>
      </el-select>
      <div class="bracket-container">
        <div v-if="loading || !tournament">
          loading
        </div>
        <div v-else>
          <!-- If we are displaying all the teams altogether -->
          <div v-if="displayType === 'tournaments'">
            <vue-bracket :tournament="tournament" viewOnly>
            </vue-bracket>
          </div>
          <!-- If we are displaying teams separately by region -->
          <div v-else>
            <div class="tournament-region" v-for="(region, index) in regionOrder" :key="index">
              <h2>{{region}}</h2>
              <vue-bracket :tournament="tournament[region]" viewOnly>
              </vue-bracket>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  created: function() {
    this.getTournament();
  },
  data: function() {
    return {
      // The year to select from the tournament dropdown
      year: validYears[0],
      validYears: validYears,
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
  watch: {
    year: function(value) {
      this.getTournament();
    },
    displayType: function(value) {
      this.getTournament();
    },
  },
  methods: {
    /**
     * Note that we don't use vue-fire for the tournament for perf
     * reasons
     */
    getTournament: function() {
      this.loading = true;
      rootRef
        .child(this.displayType)
        .child(this.year)
        .once('value')
        .then(snapshot => {
          this.tournament = snapshot.val();
          this.loading = false;
        });
    },
  },
});

const app = new Vue({
  el: '#app',
  data: function() {
    return {
      activeTab: 'past',
    };
  },
  methods: {
    onWinnerSelected: function(
      [lastRoundIndex, lastMatchIndex, lastTeamIndex],
      [roundIndex, matchIndex, teamIndex],
      netId
    ) {
      bracketsRef
        .child(netId)
        .child(lastRoundIndex)
        .child(lastMatchIndex)
        .child(lastTeamIndex)
        .once('value', snapshot => {
          const team = snapshot.val();
          bracketsRef
            .child(netId)
            .child(roundIndex)
            .child(matchIndex)
            .child(teamIndex)
            .set(team);
        });
    },
    onWinnerRemoved: function(roundIndex, matchIndex, teamIndex, netId) {
      bracketsRef
        .child(netId)
        .child(roundIndex)
        .child(matchIndex)
        .child(teamIndex)
        .set(false);
    },
  },
});
