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

    deal() {
    while (deck1.deck.length > 0){
        let card1 = deck1.deck.shift();
        this.playerDeck.push(card1);
        let card2 = deck1.deck.shift();
        this.computerDeck.push(card2);
    }
    }

    compare() {
        for(let i = 0; i < 26; i++){
            let playerCard = this.playerDeck[i].value;
            let computerCard = this.computerDeck[i].value;
            let wonRound = '';
            if (playerCard > computerCard){
                this.playerScore +=1;
                this.wonRound += `Point to ${playerName}.`
            } else if (computerCard > playerCard){
                this.computerScore += 1;
                this.wonRound += 'Point to the evil computer.'
            } else {
                this.wonRound += 'Draw, no points awarded.'
            }
            console.log(`                       Round ${i + 1}
            --------------------------

            ${playerName} plays the ${this.playerDeck[i].title} of ${this.playerDeck[i].suit} 
            The evil computer plays the ${this.computerDeck[i].title} of ${this.computerDeck[i].suit}
            ${wonRound}

            Current Score: 
            ${playerName}- ${this.playerScore}
            The evil computer- ${this.computerScore}
            `);

            alert(`                             Round ${i +1}
            -----------------------------------------------

            ${playerName} plays the ${this.playerDeck[i].title} of ${this.playerDeck[i].suit} 
            The evil computer plays the ${this.computerDeck[i].title} of ${this.computerDeck[i].suit}
            ${wonRound}
            
            Current Score: 
            ${playerName}- ${this.playerScore}
            The evil computer- ${this.computerScore}`);


        }
        if(this.playerScore > this.computerScore){
        console.log(`${playerName} wins!

        Final score:
        ${playerName}- ${this.playerScore}
        The evil computer- ${this.computerScore}`);

        alert(`${playerName} wins! 

        Final score:
        ${playerName}- ${this.playerScore}
        The evil computer- ${this.computerScore}`);
        } else if(this.computerScore > this.playerScore){
            console.log(`The evil computer wins. Run! 

            Final score:
            ${playerName}- ${this.playerScore}
            The evil computer- ${this.computerScore}`);

            alert(`The evil computer win. Run! 

            Final score:
            ${playerName}- ${this.playerScore}
            The evil computer- ${this.computerScore}`);
        } else{
            `Draw. We will meet again!
            
            Final score:
            ${playerName}- ${this.playerScore}
            The evil computer- ${this.computerScore}`
        }
    }



}        
const playerName = prompt('Welcome! Please enter your name to begin.')

const deck1 = new Deck();
deck1.shuffle();

const deal1 = new Game();
deal1.deal();
deal1.compare();
