# Vue-Bracket

> Simple component for rendering a bracket.

## Props

```javascript
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
}
```

The format of the tournament prop is displayed below:

```javascript
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
```
