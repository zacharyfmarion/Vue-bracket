Vue.component("bracket-team",{props:{team:{type:[Object,Boolean]},teams:{type:Array},bottom:{type:Boolean},viewOnly:{type:Boolean},winner:{type:Boolean},onWinnerSelected:{type:Function},onWinnerRemoved:{type:Function}},template:'\n    <li class="game" :class="{\'game-top\': !bottom, \'game-bottom\': bottom, winner}">\n      <div v-if="team" class="flex flex-auto game-wrapper">\n        <div>\n          {{teamName}}\n        </div> \n        <button @click="onWinnerRemoved" v-if="!viewOnly">x</button>\n      </div>\n      <div v-if="!team && !!teams">\n        <select :value="\'Select a team\'" @change="handleTeamSelect" class="bracket-select">\n          <option v-for="(competitor, index) in teams" :value="index">{{competitor.name}}</option>\n        </select>\n      </div>\n    </li>\n  ',computed:{teamName:function(){return this.team?this.team.name+(this.team.seed?` (${this.team.seed})`:""):""}},methods:{handleTeamSelect:function(e){e.preventDefault(),this.onWinnerSelected(parseInt(e.target.value))}}}),Vue.component("vue-bracket",{props:{tournament:{type:Array,required:!0},viewOnly:{type:Boolean,default:!1},onWinnerSelected:{type:Function,required:!1,default:function(){return()=>{}}},onWinnerRemoved:{type:Function,required:!1,default:function(){return()=>{}}}},template:'\n    <div class="tournament">\n      <ul class="round" v-for="(round, roundIndex) in tournament">\n        <template v-for="(match, matchIndex) in round" v-if="match.length > 1">\n          <li class="spacer">&nbsp;</li>\n          <template v-for="(team, teamIndex) in match">\n            <bracket-team \n              :bottom="teamIndex === 1"\n              :team="match[teamIndex]" \n              :winner="checkWinner(match, teamIndex)"\n              :viewOnly="viewOnly"\n              :teams="getTeams(roundIndex, matchIndex, teamIndex)"\n              :onWinnerSelected="handleWinnerSelected(roundIndex, matchIndex, teamIndex)" \n              :onWinnerRemoved="handleWinnerRemoved(roundIndex, matchIndex, teamIndex)">\n            </bracket-team>\n            <li \n              :class="{spacer: teamIndex === 1, game: teamIndex === 0, \'game-spacer\': teamIndex === 0}"\n              v-if="matchIndex === round.length -1 || teamIndex === 0">\n                &nbsp;\n            </li>\n          </template>\n        </template>\n      </ul>\n    </div> \n  ',methods:{validateTounament:function(){return!0},previousMatchIndex:function(e,n){return 2*(e+1)+n-2},getTeams:function(e,n,t){if(0===e)return null;const a=this.tournament[e-1][this.previousMatchIndex(n,t)];return a[0]&&a[1]?a:null},checkWinner:function(e,n){return 0===n?e[0].score>e[1].score:e[1].score>e[0].score},handleWinnerSelected:function(e,n,t){return a=>this.onWinnerSelected([e-1,this.previousMatchIndex(n,t),a],[e,n,t])},handleWinnerRemoved:function(e,n,t){return()=>this.onWinnerRemoved(e,n,t)}}});