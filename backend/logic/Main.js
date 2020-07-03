class Card {
    
    constructor (suit, rank, points, image) {
        this.suit = suit;
        this.rank = rank;
        this.points = points;
        this.image = image;
    }
}

class Deck {

    constructor() {
        this.cards = [50];
    }

    createDeck() { 
        //spades
        this.cards.push(new Card('Spades', 'A', '10', '../frontend/src/cards/AS.png'));
        this.cards.push(new Card('Spades', 'K', '0', '../frontend/src/cards/KS.png'));
        this.cards.push(new Card('Spades', 'Q', '0', '../frontend/src/cards/QS.png'));
        this.cards.push(new Card('Spades', 'J', '0', '../frontend/src/cards/JS.png'));
        this.cards.push(new Card('Spades', '10', '10', '../frontend/src/cards/10S.png'));
        this.cards.push(new Card('Spades', '9', '0', '../frontend/src/cards/9S.png'));
        this.cards.push(new Card('Spades', '8', '0', '../frontend/src/cards/8S.png'));
        this.cards.push(new Card('Spades', '7', '0', '../frontend/src/cards/7S.png'));
        this.cards.push(new Card('Spades', '6', '0', '../frontend/src/cards/6S.png'));
        this.cards.push(new Card('Spades', '5', '5', '../frontend/src/cards/5S.png'));
        this.cards.push(new Card('Spades', '4', '0', '../frontend/src/cards/4S.png'));
        this.cards.push(new Card('Spades', '3', '0', '../frontend/src/cards/3S.png'));
        this.cards.push(new Card('Spades', '2', '20', '../frontend/src/cards/2S.png'));

        //diamonds
        this.cards.push(new Card('Diamonds', 'A', '10', '../frontend/src/cards/AD.png'));
        this.cards.push(new Card('Diamonds', 'K', '0', '../frontend/src/cards/KD.png'));
        this.cards.push(new Card('Diamonds', 'Q', '0', '../frontend/src/cards/QD.png'));
        this.cards.push(new Card('Diamonds', 'J', '0', '../frontend/src/cards/JD.png'));
        this.cards.push(new Card('Diamonds', '10', '10', '../frontend/src/cards/10D.png'));
        this.cards.push(new Card('Diamonds', '9', '0', '../frontend/src/cards/9D.png'));
        this.cards.push(new Card('Diamonds', '8', '0', '../frontend/src/cards/8D.png'));
        this.cards.push(new Card('Diamonds', '7', '0', '../frontend/src/cards/7D.png'));
        this.cards.push(new Card('Diamonds', '6', '0', '../frontend/src/cards/6D.png'));
        this.cards.push(new Card('Diamonds', '5', '5', '../frontend/src/cards/5D.png'));
        this.cards.push(new Card('Diamonds', '4', '0', '../frontend/src/cards/4D.png'));
        this.cards.push(new Card('Diamonds', '3', '0', '../frontend/src/cards/3D.png'));

        //clubs
        this.cards.push(new Card('Clubs', 'A', '10', '../frontend/src/cards/AC.png'));
        this.cards.push(new Card('Clubs', 'K', '0', '../frontend/src/cards/KC.png'));
        this.cards.push(new Card('Clubs', 'Q', '0', '../frontend/src/cards/QC.png'));
        this.cards.push(new Card('Clubs', 'J', '0', '../frontend/src/cards/JC.png'));
        this.cards.push(new Card('Clubs', '10', '10', '../frontend/src/cards/10C.png'));
        this.cards.push(new Card('Clubs', '9', '0', '../frontend/src/cards/9C.png'));
        this.cards.push(new Card('Clubs', '8', '0', '../frontend/src/cards/8C.png'));
        this.cards.push(new Card('Clubs', '7', '0', '../frontend/src/cards/7C.png'));
        this.cards.push(new Card('Clubs', '6', '0', '../frontend/src/cards/6C.png'));
        this.cards.push(new Card('Clubs', '5', '5', '../frontend/src/cards/5C.png'));
        this.cards.push(new Card('Clubs', '4', '0', '../frontend/src/cards/4C.png'));
        this.cards.push(new Card('Clubs', '3', '0', '../frontend/src/cards/3C.png'));

        //hearts
        this.cards.push(new Card('Hearts', 'A', '10', '../frontend/src/cards/AH.png'));
        this.cards.push(new Card('Hearts', 'K', '0', '../frontend/src/cards/KH.png'));
        this.cards.push(new Card('Hearts', 'Q', '0', '../frontend/src/cards/QH.png'));
        this.cards.push(new Card('Hearts', 'J', '0', '../frontend/src/cards/JH.png'));
        this.cards.push(new Card('Hearts', '10', '10', '../frontend/src/cards/10H.png'));
        this.cards.push(new Card('Hearts', '9', '0', '../frontend/src/cards/9H.png'));
        this.cards.push(new Card('Hearts', '8', '0', '../frontend/src/cards/8H.png'));
        this.cards.push(new Card('Hearts', '7', '0', '../frontend/src/cards/7H.png'));
        this.cards.push(new Card('Hearts', '6', '0', '../frontend/src/cards/6H.png'));
        this.cards.push(new Card('Hearts', '5', '5', '../frontend/src/cards/5H.png'));
        this.cards.push(new Card('Hearts', '4', '0', '../frontend/src/cards/4H.png'));
        this.cards.push(new Card('Hearts', '3', '0', '../frontend/src/cards/3H.png'));
        this.cards.push(new Card('Hearts', '2', '0', '../frontend/src/cards/2H.png'));
    }

    shuffleDeck() {
        let location1, location2, temp;

        for (let i = 0; i < 1000; i++) {
            location1 = Math.floor(Math.random() * this.cards.length);
            location2 = Math.floor(Math.random() * this.cards.length);
            temp = this.cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = temp;
        }
    }
}

class Player {

    constructor (playerName) {
        this.playerName = playerName;
        this.playerStack = [10];
        this.playerHands = [];
    }
}

class Game {

    constructor() {
        this.hands = [10][5]; //2D array of 10 hands of 5 cards each
        this.players = [5]; //5 total players
        this.dealer = 0;
    }

    startGame(playerOne, playerTwo, playerThree, playerFour, playerFive) {
        //add 5 players to the game
        this.players.push(playerOne);
        this.players.push(playerTwo);
        this.players.push(playerThree);
        this.players.push(playerFour);
        this.players.push(playerFive);

        //set up deck
        let deck = new Deck();
        deck.createDeck();
        deck.shuffleDeck();

        this.players[0].playerStack = deck.cards.slice(0, 10);
        this.players[1].playerStack = deck.cards.slice(10, 20);
        this.players[2].playerStack = deck.cards.slice(20, 30);
        this.players[3].playerStack = deck.cards.slice(30, 40);
        this.players[4].playerStack = deck.cards.slice(40, 50);
    }

    updateDealer() {
        if (this.dealer < 4) {
            this.dealer++;
        }

        else {
            this.dealer = 0;
        }
    }
}

let game = new Game();
game.start("anu", "dhanush", "anshul", "shree", "ashley");
console.log(game.players);

//check if can create images using src and img like this
console.log(game.players[0].playerStack[0].image);

export default Main;