class Card {

    constructor(suit, rank, points, image) {
        this.suit = suit;
        this.rank = rank;
        this.points = points;
        this.image = image;
    }
}

class Deck {

    constructor() {
        this.cards = []; //50 total cards
    }

    createDeck() {
        //spades
        this.cards.push(new Card("Spades", "A", "10", "../cards/AS.png"));
        this.cards.push(new Card("Spades", "K", "0", "../cards/KS.png"));
        this.cards.push(new Card("Spades", "Q", "0", "../cards/QS.png"));
        this.cards.push(new Card("Spades", "J", "0", "../cards/JS.png"));
        this.cards.push(new Card("Spades", "10", "10", "../cards/10S.png"));
        this.cards.push(new Card("Spades", "9", "0", "../cards/9S.png"));
        this.cards.push(new Card("Spades", "8", "0", "../cards/8S.png"));
        this.cards.push(new Card("Spades", "7", "0", "../cards/7S.png"));
        this.cards.push(new Card("Spades", "6", "0", "../cards/6S.png"));
        this.cards.push(new Card("Spades", "5", "5", "../cards/5S.png"));
        this.cards.push(new Card("Spades", "4", "0", "../cards/4S.png"));
        this.cards.push(new Card("Spades", "3", "0", "../cards/3S.png"));
        this.cards.push(new Card("Spades", "2", "20", "../cards/2S.png"));

        //diamonds
        this.cards.push(new Card("Diamonds", "A", "10", "../cards/AD.png"));
        this.cards.push(new Card("Diamonds", "K", "0", "../cards/KD.png"));
        this.cards.push(new Card("Diamonds", "Q", "0", "../cards/QD.png"));
        this.cards.push(new Card("Diamonds", "J", "0", "../cards/JD.png"));
        this.cards.push(new Card("Diamonds", "10", "10", "../cards/10D.png"));
        this.cards.push(new Card("Diamonds", "9", "0", "../cards/9D.png"));
        this.cards.push(new Card("Diamonds", "8", "0", "../cards/8D.png"));
        this.cards.push(new Card("Diamonds", "7", "0", "../cards/7D.png"));
        this.cards.push(new Card("Diamonds", "6", "0", "../cards/6D.png"));
        this.cards.push(new Card("Diamonds", "5", "5", "../cards/5D.png"));
        this.cards.push(new Card("Diamonds", "4", "0", "../cards/4D.png"));
        this.cards.push(new Card("Diamonds", "3", "0", "../cards/3D.png"));

        //clubs
        this.cards.push(new Card("Clubs", "A", "10", "../cards/AC.png"));
        this.cards.push(new Card("Clubs", "K", "0", "../cards/KC.png"));
        this.cards.push(new Card("Clubs", "Q", "0", "../cards/QC.png"));
        this.cards.push(new Card("Clubs", "J", "0", "../cards/JC.png"));
        this.cards.push(new Card("Clubs", "10", "10", "../cards/10C.png"));
        this.cards.push(new Card("Clubs", "9", "0", "../cards/9C.png"));
        this.cards.push(new Card("Clubs", "8", "0", "../cards/8C.png"));
        this.cards.push(new Card("Clubs", "7", "0", "../cards/7C.png"));
        this.cards.push(new Card("Clubs", "6", "0", "../cards/6C.png"));
        this.cards.push(new Card("Clubs", "5", "5", "../cards/5C.png"));
        this.cards.push(new Card("Clubs", "4", "0", "../cards/4C.png"));
        this.cards.push(new Card("Clubs", "3", "0", "../cards/3C.png"));

        //hearts
        this.cards.push(new Card("Hearts", "A", "10", "../cards/AH.png"));
        this.cards.push(new Card("Hearts", "K", "0", "../cards/KH.png"));
        this.cards.push(new Card("Hearts", "Q", "0", "../cards/QH.png"));
        this.cards.push(new Card("Hearts", "J", "0", "../cards/JH.png"));
        this.cards.push(new Card("Hearts", "10", "10", "../cards/10H.png"));
        this.cards.push(new Card("Hearts", "9", "0", "../cards/9H.png"));
        this.cards.push(new Card("Hearts", "8", "0", "../cards/8H.png"));
        this.cards.push(new Card("Hearts", "7", "0", "../cards/7H.png"));
        this.cards.push(new Card("Hearts", "6", "0", "../cards/6H.png"));
        this.cards.push(new Card("Hearts", "5", "5", "../cards/5H.png"));
        this.cards.push(new Card("Hearts", "4", "0", "../cards/4H.png"));
        this.cards.push(new Card("Hearts", "3", "0", "../cards/3H.png"));
        this.cards.push(new Card("Hearts", "2", "0", "../cards/2H.png"));
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

    constructor(playerName) {
        this.playerName = playerName;
        this.playerStack = [10];
        this.playerHands = [];
    }
}

class Game {

    constructor() {
        this.hands = [10][5]; //2D array of 10 hands of 5 cards each
        this.players = []; //5 total players
        this.dealer = 0;
        this.deck = new Deck();
    }

    startGame(playerOne, playerTwo, playerThree, playerFour, playerFive) {
        //add 5 players to the game
        this.players.push(playerOne);
        this.players.push(playerTwo);
        this.players.push(playerThree);
        this.players.push(playerFour);
        this.players.push(playerFive);

        //set up deck
        this.deck.createDeck();
        this.deck.shuffleDeck();

        this.players[0].playerStack = this.deck.cards.slice(0, 10);
        this.players[1].playerStack = this.deck.cards.slice(10, 20);
        this.players[2].playerStack = this.deck.cards.slice(20, 30);
        this.players[3].playerStack = this.deck.cards.slice(30, 40);
        this.players[4].playerStack = this.deck.cards.slice(40, 50);
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

sampleArray = [2];
sampleArray.push("Hello");
sampleArray.push("World");

function dumb() { }

    let game = new Game();

    let playerOne = new Player("Anu");
    let playerTwo = new Player("Dhanush");
    let playerThree = new Player("Anshul");
    let playerFour = new Player("Nidhi");
    let playerFive = new Player("Ashley");

    game.startGame(playerOne, playerTwo, playerThree, playerFour, playerFive);

    // starting card images
    let p1StartingCards = []; //10 total cards
    p1StartingCards.push(game.players[0].playerStack[0].image);
    p1StartingCards.push(game.players[0].playerStack[1].image);
    p1StartingCards.push(game.players[0].playerStack[2].image);
    p1StartingCards.push(game.players[0].playerStack[3].image);
    p1StartingCards.push(game.players[0].playerStack[4].image);
    p1StartingCards.push(game.players[0].playerStack[5].image);
    p1StartingCards.push(game.players[0].playerStack[6].image);
    p1StartingCards.push(game.players[0].playerStack[7].image);
    p1StartingCards.push(game.players[0].playerStack[8].image);
    p1StartingCards.push(game.players[0].playerStack[9].image);

    let p2StartingCards = []; //10 total cards
    p2StartingCards.push(game.players[1].playerStack[0].image);
    p2StartingCards.push(game.players[1].playerStack[1].image);
    p2StartingCards.push(game.players[1].playerStack[2].image);
    p2StartingCards.push(game.players[1].playerStack[3].image);
    p2StartingCards.push(game.players[1].playerStack[4].image);
    p2StartingCards.push(game.players[1].playerStack[5].image);
    p2StartingCards.push(game.players[1].playerStack[6].image);
    p2StartingCards.push(game.players[1].playerStack[7].image);
    p2StartingCards.push(game.players[1].playerStack[8].image);
    p2StartingCards.push(game.players[1].playerStack[9].image);

    let p3StartingCards = []; //10 total cards
    p3StartingCards.push(game.players[2].playerStack[0].image);
    p3StartingCards.push(game.players[2].playerStack[1].image);
    p3StartingCards.push(game.players[2].playerStack[2].image);
    p3StartingCards.push(game.players[2].playerStack[3].image);
    p3StartingCards.push(game.players[2].playerStack[4].image);
    p3StartingCards.push(game.players[2].playerStack[5].image);
    p3StartingCards.push(game.players[2].playerStack[6].image);
    p3StartingCards.push(game.players[2].playerStack[7].image);
    p3StartingCards.push(game.players[2].playerStack[8].image);
    p3StartingCards.push(game.players[2].playerStack[9].image);

    let p4StartingCards = []; //10 total cards
    p4StartingCards.push(game.players[3].playerStack[0].image);
    p4StartingCards.push(game.players[3].playerStack[1].image);
    p4StartingCards.push(game.players[3].playerStack[2].image);
    p4StartingCards.push(game.players[3].playerStack[3].image);
    p4StartingCards.push(game.players[3].playerStack[4].image);
    p4StartingCards.push(game.players[3].playerStack[5].image);
    p4StartingCards.push(game.players[3].playerStack[6].image);
    p4StartingCards.push(game.players[3].playerStack[7].image);
    p4StartingCards.push(game.players[3].playerStack[8].image);
    p4StartingCards.push(game.players[3].playerStack[9].image);

    let p5StartingCards = []; //10 total cards
    p5StartingCards.push(game.players[4].playerStack[0].image);
    p5StartingCards.push(game.players[4].playerStack[1].image);
    p5StartingCards.push(game.players[4].playerStack[2].image);
    p5StartingCards.push(game.players[4].playerStack[3].image);
    p5StartingCards.push(game.players[4].playerStack[4].image);
    p5StartingCards.push(game.players[4].playerStack[5].image);
    p5StartingCards.push(game.players[4].playerStack[6].image);
    p5StartingCards.push(game.players[4].playerStack[7].image);
    p5StartingCards.push(game.players[4].playerStack[8].image);
    p5StartingCards.push(game.players[4].playerStack[9].image);

    //console.log(game.deck);
    //console.log(game.players);
    //console.log(game.players[0].playerStack[0].image);
    console.log(game.players[0].playerStack);


module.exports = { dumb, p1StartingCards };