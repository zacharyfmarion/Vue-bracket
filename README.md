# Vue-Bracket

> Simple component for rendering a bracket.

## Installation

You can easily use the component with the following cdns:

```html
  <script src="https://cdn.jsdelivr.net/gh/zacharyfmarion/vue-bracket@1.0/build/vue-bracket.min.js"></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/zacharyfmarion/vue-bracket@1.0/build/vue-bracket.css">
```

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
  [
    [
      {
        name: 'St Johns',
        score: 83,
        seed: 1,
      },
      {
        name: 'Southern',
        score: 59,
        seed: 16,
      },
    ],
    [
      {
        name: 'VCU',
        score: 81,
        seed: 2,
      },
      {
        name: 'Marshall',
        score: 65,
        seed: 15,
      },
    ],
    [
      {
        name: 'NC State',
        score: 65,
        seed: 3,
      },
      {
        name: 'Nevada',
        score: 56,
        seed: 14,
      },
    ],
    [
      {
        name: 'UNLV',
        score: 85,
        seed: 4,
      },
      {
        name: 'San Diego St',
        score: 80,
        seed: 13,
      },
    ],
    [
      {
        name: 'Washington',
        score: 58,
        seed: 5,
      },
      {
        name: 'Kentucky',
        score: 65,
        seed: 12,
      },
    ],
    [
      {
        name: 'Tulsa',
        score: 75,
        seed: 6,
      },
      {
        name: 'UTEP',
        score: 79,
        seed: 11,
      },
    ],
    [
      {
        name: 'Alabama',
        score: 50,
        seed: 7,
      },
      {
        name: 'Arizona',
        score: 41,
        seed: 10,
      },
    ],
    [
      {
        name: 'Iowa',
        score: 54,
        seed: 8,
      },
      {
        name: 'Arkansas',
        score: 63,
        seed: 9,
      },
    ],
    [
      {
        name: 'Georgetown',
        score: 68,
        seed: 1,
      },
      {
        name: 'Lehigh',
        score: 43,
        seed: 16,
      },
    ],
    [
      {
        name: 'Georgia Tech',
        score: 65,
        seed: 2,
      },
      {
        name: 'Mercer',
        score: 58,
        seed: 15,
      },
    ],
    [
      {
        name: 'Illinois',
        score: 76,
        seed: 3,
      },
      {
        name: 'Northeastern',
        score: 57,
        seed: 14,
      },
    ],
    [
      {
        name: 'Loyola Illinois',
        score: 59,
        seed: 4,
      },
      {
        name: 'Iona',
        score: 58,
        seed: 13,
      },
    ],
    [
      {
        name: 'SMU',
        score: 85,
        seed: 5,
      },
      {
        name: 'Old Dominion',
        score: 68,
        seed: 12,
      },
    ],
    [
      {
        name: 'Georgia',
        score: 67,
        seed: 6,
      },
      {
        name: 'Wichita St',
        score: 59,
        seed: 11,
      },
    ],
    [
      {
        name: 'Syracuse',
        score: 70,
        seed: 7,
      },
      {
        name: 'DePaul',
        score: 65,
        seed: 10,
      },
    ],
    [
      {
        name: 'Temple',
        score: 60,
        seed: 8,
      },
      {
        name: 'Virginia Tech',
        score: 57,
        seed: 9,
      },
    ],
    [
      {
        name: 'Oklahoma',
        score: 96,
        seed: 1,
      },
      {
        name: 'North Carolina A&T',
        score: 83,
        seed: 16,
      },
    ],
    [
      {
        name: 'Memphis',
        score: 67,
        seed: 2,
      },
      {
        name: 'Pennsylvania',
        score: 55,
        seed: 15,
      },
    ],
    [
      {
        name: 'Duke',
        score: 75,
        seed: 3,
      },
      {
        name: 'Pepperdine',
        score: 62,
        seed: 14,
      },
    ],
    [
      {
        name: 'Ohio St',
        score: 75,
        seed: 4,
      },
      {
        name: 'Iowa St',
        score: 64,
        seed: 13,
      },
    ],
    [
      {
        name: 'Louisiana Tech',
        score: 78,
        seed: 5,
      },
      {
        name: 'Pittsburgh',
        score: 54,
        seed: 12,
      },
    ],
    [
      {
        name: 'Texas Tech',
        score: 53,
        seed: 6,
      },
      {
        name: 'Boston College',
        score: 55,
        seed: 11,
      },
    ],
    [
      {
        name: 'UAB',
        score: 70,
        seed: 7,
      },
      {
        name: 'Michigan St',
        score: 68,
        seed: 10,
      },
    ],
    [
      {
        name: 'USC',
        score: 55,
        seed: 8,
      },
      {
        name: 'Illinois St',
        score: 58,
        seed: 9,
      },
    ],
    [
      {
        name: 'Michigan',
        score: 59,
        seed: 1,
      },
      {
        name: 'Fairleigh Dickinson',
        score: 55,
        seed: 16,
      },
    ],
    [
      {
        name: 'North Carolina',
        score: 76,
        seed: 2,
      },
      {
        name: 'Middle Tennessee St',
        score: 57,
        seed: 15,
      },
    ],
    [
      {
        name: 'Kansas',
        score: 49,
        seed: 3,
      },
      {
        name: 'Ohio',
        score: 38,
        seed: 14,
      },
    ],
    [
      {
        name: 'LSU',
        score: 55,
        seed: 4,
      },
      {
        name: 'Navy',
        score: 78,
        seed: 13,
      },
    ],
    [
      {
        name: 'Maryland',
        score: 69,
        seed: 5,
      },
      {
        name: 'Miami Ohio',
        score: 68,
        seed: 12,
      },
    ],
    [
      {
        name: 'Purdue',
        score: 58,
        seed: 6,
      },
      {
        name: 'Auburn',
        score: 59,
        seed: 11,
      },
    ],
    [
      {
        name: 'Notre Dame',
        score: 79,
        seed: 7,
      },
      {
        name: 'Oregon St',
        score: 70,
        seed: 10,
      },
    ],
    [
      {
        name: 'Villanova',
        score: 51,
        seed: 8,
      },
      {
        name: 'Dayton',
        score: 49,
        seed: 9,
      },
    ],
  ],
  [
    [
      {
        name: 'St Johns',
        score: 68,
        seed: 1,
      },
      {
        name: 'Arkansas',
        score: 65,
        seed: 9,
      },
    ],
    [
      {
        name: 'VCU',
        score: 59,
        seed: 2,
      },
      {
        name: 'Alabama',
        score: 63,
        seed: 7,
      },
    ],
    [
      {
        name: 'NC State',
        score: 86,
        seed: 3,
      },
      {
        name: 'UTEP',
        score: 73,
        seed: 11,
      },
    ],
    [
      {
        name: 'UNLV',
        score: 61,
        seed: 4,
      },
      {
        name: 'Kentucky',
        score: 64,
        seed: 12,
      },
    ],
    [
      {
        name: 'Georgetown',
        score: 63,
        seed: 1,
      },
      {
        name: 'Temple',
        score: 46,
        seed: 8,
      },
    ],
    [
      {
        name: 'Georgia Tech',
        score: 70,
        seed: 2,
      },
      {
        name: 'Syracuse',
        score: 53,
        seed: 7,
      },
    ],
    [
      {
        name: 'Illinois',
        score: 74,
        seed: 3,
      },
      {
        name: 'Georgia',
        score: 58,
        seed: 6,
      },
    ],
    [
      {
        name: 'Loyola Illinois',
        score: 70,
        seed: 4,
      },
      {
        name: 'SMU',
        score: 57,
        seed: 5,
      },
    ],
    [
      {
        name: 'Oklahoma',
        score: 75,
        seed: 1,
      },
      {
        name: 'Illinois St',
        score: 69,
        seed: 9,
      },
    ],
    [
      {
        name: 'Memphis',
        score: 67,
        seed: 2,
      },
      {
        name: 'UAB',
        score: 66,
        seed: 7,
      },
    ],
    [
      {
        name: 'Duke',
        score: 73,
        seed: 3,
      },
      {
        name: 'Boston College',
        score: 74,
        seed: 11,
      },
    ],
    [
      {
        name: 'Ohio St',
        score: 67,
        seed: 4,
      },
      {
        name: 'Louisiana Tech',
        score: 79,
        seed: 5,
      },
    ],
    [
      {
        name: 'Michigan',
        score: 55,
        seed: 1,
      },
      {
        name: 'Villanova',
        score: 59,
        seed: 8,
      },
    ],
    [
      {
        name: 'North Carolina',
        score: 60,
        seed: 2,
      },
      {
        name: 'Notre Dame',
        score: 58,
        seed: 7,
      },
    ],
    [
      {
        name: 'Kansas',
        score: 64,
        seed: 3,
      },
      {
        name: 'Auburn',
        score: 66,
        seed: 11,
      },
    ],
    [
      {
        name: 'Navy',
        score: 59,
        seed: 13,
      },
      {
        name: 'Maryland',
        score: 64,
        seed: 5,
      },
    ],
  ],
  [
    [
      {
        name: 'St Johns',
        score: 86,
        seed: 1,
      },
      {
        name: 'Kentucky',
        score: 70,
        seed: 12,
      },
    ],
    [
      {
        name: 'Alabama',
        score: 55,
        seed: 7,
      },
      {
        name: 'NC State',
        score: 61,
        seed: 3,
      },
    ],
    [
      {
        name: 'Georgetown',
        score: 65,
        seed: 1,
      },
      {
        name: 'Loyola Illinois',
        score: 53,
        seed: 4,
      },
    ],
    [
      {
        name: 'Georgia Tech',
        score: 61,
        seed: 2,
      },
      {
        name: 'Illinois',
        score: 53,
        seed: 3,
      },
    ],
    [
      {
        name: 'Oklahoma',
        score: 86,
        seed: 1,
      },
      {
        name: 'Louisiana Tech',
        score: 84,
        seed: 5,
      },
    ],
    [
      {
        name: 'Memphis',
        score: 59,
        seed: 2,
      },
      {
        name: 'Boston College',
        score: 57,
        seed: 11,
      },
    ],
    [
      {
        name: 'Villanova',
        score: 46,
        seed: 8,
      },
      {
        name: 'Maryland',
        score: 43,
        seed: 5,
      },
    ],
    [
      {
        name: 'North Carolina',
        score: 62,
        seed: 2,
      },
      {
        name: 'Auburn',
        score: 56,
        seed: 11,
      },
    ],
  ],
  [
    [
      {
        name: 'St Johns',
        score: 69,
        seed: 1,
      },
      {
        name: 'NC State',
        score: 60,
        seed: 3,
      },
    ],
    [
      {
        name: 'Georgetown',
        score: 60,
        seed: 1,
      },
      {
        name: 'Georgia Tech',
        score: 54,
        seed: 2,
      },
    ],
    [
      {
        name: 'Oklahoma',
        score: 61,
        seed: 1,
      },
      {
        name: 'Memphis',
        score: 63,
        seed: 2,
      },
    ],
    [
      {
        name: 'Villanova',
        score: 56,
        seed: 8,
      },
      {
        name: 'North Carolina',
        score: 44,
        seed: 2,
      },
    ],
  ],
  [
    [
      {
        name: 'St Johns',
        score: 59,
        seed: 1,
      },
      {
        name: 'Georgetown',
        score: 77,
        seed: 1,
      },
    ],
    [
      {
        name: 'Memphis',
        score: 45,
        seed: 2,
      },
      {
        name: 'Villanova',
        score: 52,
        seed: 8,
      },
    ],
  ],
  [
    [
      {
        name: 'Georgetown',
        score: 64,
        seed: 1,
      },
      {
        name: 'Villanova',
        score: 66,
        seed: 8,
      },
    ],
  ],
];
```
