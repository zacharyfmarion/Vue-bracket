# Vue-Bracket

> Simple component for rendering a bracket.

## Props

Component accepts one prop called `tournament`, which accepts an array of the type displayed below

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
      { name: 'Player 114', winner: true, ID: 114 },
      { name: 'Player 214', ID: 214 },
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
      { name: 'Player 118', winner: true, ID: 118 },
      { name: 'Player 218', ID: 218 },
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
      { name: 'Player 117', winner: true, ID: 117 },
      { name: 'Player 218', ID: 218 },
    ],
  ],

  //-- Round 3
  [
    [
      { name: 'Player 111', winner: true, ID: 111 },
      { name: 'Player 113', ID: 113 },
    ],

    [
      { name: 'Player 115', winner: true, ID: 115 },
      { name: 'Player 218', ID: 218 },
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

This component would be rendered as follows:

```html
<vue-bracket :tournament="tournament"></vue-bracket>
```
