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
