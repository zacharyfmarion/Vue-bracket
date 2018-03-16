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

// Getting references to the firebase database
const db = firebaseApp.database();
const rootRef = db.ref();

Vue.component('bracket-team', {
  props: {
    team: {
      type: Object,
    },
    bottom: {
      type: Boolean,
    },
  },
  template: `
    <li class="game" :class="{'game-top': !bottom, 'game-bottom': bottom, winner: team && team.winner}">
      <span v-if="team">{{team.name}}</span> 
      <button v-else>Testing</button>
    </li>
  `,
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
  },
  template: `
    <div class="tournament">
      <ul class="round" v-for="round in tournament">
        <template v-for="(match, index) in round" v-if="match.length > 1">
          <li class="spacer">&nbsp;</li>
          <bracket-team :team="match[0]"></bracket-team>
          <li class="game game-spacer">&nbsp;</li>
          <bracket-team :team="match[1]" bottom></bracket-team>
          <li class="spacer" v-if="index === round.length -1">&nbsp;</li>
        </template>
        <template v-for="(match, index) in round" v-if="match.length === 1">
          <bracket-team :team="match[0]"></bracket-team>
        </template>
      </ul>
    </div> 
  `,
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

const app = new Vue({
  el: '#app',
  data: {
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
      console.log(this.displayType);
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
  },
});
