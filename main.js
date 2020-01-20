let cardsDealt;
let cardsDealtTotal;
let won;

/* --------------------------------------------------------
  -------------------------------------------------------- */

// render game
function render() {
  // render card totals
  for (let total in cardsDealtTotal) {
    handTotals[total].textContent = cardsDealtTotal[total];
  }
  // render cards dealt
}

const handTotals = {
  player: document.getElementById("playersHandTotal"),
  dealer: document.getElementById("dealersHandTotal")
};

const handCards = {
  player: {
    playerArea: document.getElementById("playerHand"),
    cardImg: document.querySelector("#playerHand img")
  },
  dealer: {
    dealerArea: document.getElementById("dealerHand"),
    cardImg: document.querySelector("#dealerHand img")
  }
};

// initialize game
beginGame();

// starting game constants
function beginGame() {
  cardsDealtTotal = {
    player: 0,
    dealer: 0
  };
  cardsDealt = {
    player: null,
    dealer: null
  };
  won = null;
  render();
}

class Deck {
  constructor() {
    this.deck = [];

    const suits = ["Hearts", "Spades", "Clubs", "Diamonds"];
    const values = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];

    for (let suit in suits) {
      for (let value in values) {
        this.deck.push(`${values[value]} of ${suits[suit]}`);
      }
    }
  }

  shuffle() {
    const { deck } = this;
    let m = deck.length,
      i;

    while (m) {
      i = Math.floor(Math.random() * m--);

      [deck[m], deck[i]] = [deck[i], deck[m]];
    }

    return this;
  }

  deal() {
    return this.deck.pop();
  }
}

const deck1 = new Deck();
deck1.shuffle();
console.log(deck1.deck);
deck1.deal();
console.log(deck1.deck);

/* --------------------------------------------------------
  -------------------------------------------------------- */

// deal inital cards (two each)
function dealCards() {
  console.log("clicked DEAL", deck1.deal());
}
document.getElementById("dealButton").addEventListener("click", dealCards);

// player clicks hit button to add a card to their hand
function hit() {
  console.log("clicked HIT");
}
document.getElementById("hitButton").addEventListener("click", hit);

// player ends current game by clicking stand button
function stand() {
  console.log("clicked STAND");
}
document.getElementById("standButton").addEventListener("click", stand);
