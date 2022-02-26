class Card {
    constructor (suit, value, title) {
        this.title = title;
        this.value = value;
        this.suit = suit;
    }

    describe(){
        return `The ${title} of ${suit}.`
    }
}

class Deck {
    constructor() {
        this.deck = [];
        this.shuffledDeck = [];
            
        const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        const suits = ['Diamonds', 'Hearts', 'Spades', 'Clubs']

        for (let i = 0; i < suits.length; i++)
            for(let value of values){
                let suit = suits[i];
                let title = value;
                switch (title) {
                    case 11:
                        title = 'Jack'
                        break;
                    case 12:
                        title = 'Queen'
                        break;
                    case 13:
                        title = 'King'
                        break;
                    case 14:
                        title = 'Ace'
                        break;
                }
                this.deck.push(new Card(suit, value, title));
            }
    }
    
    shuffle(){
        for (let i = this.deck.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * (i+1));
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }
}


const deck1 = new Deck();
console.log(deck1.deck);

deck1.shuffle();
console.log(deck1.deck[49]);

class Players {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }
}

class Game {}