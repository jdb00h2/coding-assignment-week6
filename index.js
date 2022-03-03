class Card {
    constructor (suit, value, title) {
        this.title = title;
        this.value = value;
        this.suit = suit;
    }

    describe() {
        return `The ${title} of ${suit}.`
    }
}

// To begin, we must create a deck of cards.
class Deck {
    constructor() {
        this.deck = [];
            
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


    // Fisher-Yates Shuffle to shuffle the deck. https://www.geeksforgeeks.org/shuffle-a-given-array-using-fisher-yates-shuffle-algorithm/
    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * (i+1));
            let temp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = temp;
        }
    }
}

class Game {
    constructor() {
        this.playerDeck = [];
        this.computerDeck = [];
        this.playerScore = 0;
        this.computerScore = 0
        this.wonRound = '';
    }

    // We have our 52 card deck. Now we need to deal the cards to the player and cpu. This will alternate between player and cpu, dealing from the top.
    deal() {
    while (deck1.deck.length > 0){
        let card1 = deck1.deck.shift();
        this.playerDeck.push(card1);
        let card2 = deck1.deck.shift();
        this.computerDeck.push(card2);
    }
    }

    // And finally to implement the game.
    compare() {
        for(let i = 0; i < 26; i++){
            let playerCard = this.playerDeck[i].value;
            let computerCard = this.computerDeck[i].value;
            if (playerCard > computerCard){
                this.playerScore +=1;
                this.wonRound = `Point to ${playerName}.`
            } else if (computerCard > playerCard){
                this.computerScore += 1;
                this.wonRound = 'Point to the evil computer.'
            } else {
                this.wonRound = 'Draw, no points awarded.'
            }
            console.log(`                       Round ${i + 1}
            ---------------------------------

            ${playerName} draws the ${this.playerDeck[i].title} of ${this.playerDeck[i].suit}. 
            The evil computer draws the ${this.computerDeck[i].title} of ${this.computerDeck[i].suit}.
            ${this.wonRound}

            Current Score: 
            ${playerName}- ${this.playerScore}
            Evil Computer- ${this.computerScore}
            `);

            alert(`                                     Round ${i +1}
            ----------------------------------------------
            ${playerName} draws the ${this.playerDeck[i].title} of ${this.playerDeck[i].suit}. 
            The evil computer draws the ${this.computerDeck[i].title} of ${this.computerDeck[i].suit}.
            ${this.wonRound}
            
            Current Score: 
            ${playerName}- ${this.playerScore}
            Evil Computer- ${this.computerScore}`);


        }
        if(this.playerScore > this.computerScore){
        console.log(`            ${playerName} wins!

            Final score:
            ${playerName}- ${this.playerScore}
            Evil Computer- ${this.computerScore}`);

        alert(`        ${playerName} wins! 

        Final score:
        ${playerName}- ${this.playerScore}
        Evil Computer- ${this.computerScore}`);
        } else if(this.computerScore > this.playerScore){
            console.log(`            The evil computer wins. Run! 

            Final score:
            ${playerName}- ${this.playerScore}
            Evil Computer- ${this.computerScore}`);

            alert(`           The evil computer wins. Run! 

            Final score:
            ${playerName}- ${this.playerScore}
            Evil Computer- ${this.computerScore}`);
        } else{
            console.log(`            Draw. We will meet again!
            
            Final score:
            ${playerName}- ${this.playerScore}
            Evil Computer- ${this.computerScore}`)
            
            alert(`           Draw. We will meet again!
            
            Final score:
            ${playerName}- ${this.playerScore}
            Evil Computer- ${this.computerScore}`)
        }
    }



}

function getName(){
    playerName = prompt('Welcome! Please enter your name to begin.');
    return playerName;
}
getName();

const deck1 = new Deck();
deck1.shuffle();

const game = new Game();
game.deal();
game.compare();