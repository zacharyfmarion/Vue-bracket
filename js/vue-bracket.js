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
      <div v-if="team" class="flex flex-auto game-wrapper">
        <div>
          {{teamName}}
        </div> 
        <button @click="onWinnerRemoved" v-if="!viewOnly">x</button>
      </div>
      <div v-if="!team && !!teams">
        <select :value="'Select a team'" @change="handleTeamSelect" class="bracket-select">
          <option v-for="(competitor, index) in teams" :value="index">{{competitor.name}}</option>
        </select>
      </div>
    </li>
  `,
  computed: {
    teamName: function() {
      if (!this.team) return '';
      return this.team.name + (this.team.seed ? ` (${this.team.seed})` : '');
    },
  },
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
