
class Card {

    constructor(index, suit, rank, points) {
        this.index = index;
        this.suit = suit;
        this.rank = rank;
        this.points = points;
    }
}

class Deck {

    constructor() {
        this.cards = []; //50 total cards
    }

    createDeck() {
        //spades
        this.cards.push(new Card("AS", "Spades", "A", 10));
        this.cards.push(new Card("KS", "Spades", "K", 0));
        this.cards.push(new Card("QS", "Spades", "Q", 0));
        this.cards.push(new Card("JS", "Spades", "J", 0));
        this.cards.push(new Card("TENS", "Spades", "10", 10));
        this.cards.push(new Card("NINES", "Spades", "9", 0));
        this.cards.push(new Card("EIGHTS", "Spades", "8", 0));
        this.cards.push(new Card("SEVENS", "Spades", "7", 0));
        this.cards.push(new Card("SIXS", "Spades", "6", 0));
        this.cards.push(new Card("FIVES", "Spades", "5", 5));
        this.cards.push(new Card("FOURS", "Spades", "4", 0));
        this.cards.push(new Card("THREES", "Spades", "3", 0));
        this.cards.push(new Card("TWOS", "Spades", "2", 20));

        //diamonds
        this.cards.push(new Card("AD", "Diamonds", "A", 10));
        this.cards.push(new Card("KD", "Diamonds", "K", 0));
        this.cards.push(new Card("QD", "Diamonds", "Q", 0));
        this.cards.push(new Card("JD", "Diamonds", "J", 0));
        this.cards.push(new Card("TEND", "Diamonds", "10", 10));
        this.cards.push(new Card("NINED", "Diamonds", "9", 0));
        this.cards.push(new Card("EIGHTD", "Diamonds", "8", 0));
        this.cards.push(new Card("SEVEND", "Diamonds", "7", 0));
        this.cards.push(new Card("SIXD", "Diamonds", "6", 0));
        this.cards.push(new Card("FIVED", "Diamonds", "5", 5));
        this.cards.push(new Card("FOURD", "Diamonds", "4", 0));
        this.cards.push(new Card("THREED", "Diamonds", "3", 0));

        //clubs
        this.cards.push(new Card("AC", "Clubs", "A", 10));
        this.cards.push(new Card("KC", "Clubs", "K", 0));
        this.cards.push(new Card("QC", "Clubs", "Q", 0));
        this.cards.push(new Card("JC", "Clubs", "J", 0));
        this.cards.push(new Card("TENC", "Clubs", "10", 10));
        this.cards.push(new Card("NINEC", "Clubs", "9", 0));
        this.cards.push(new Card("EIGHTC", "Clubs", "8", 0));
        this.cards.push(new Card("SEVENC", "Clubs", "7", 0));
        this.cards.push(new Card("SIXC", "Clubs", "6", 0));
        this.cards.push(new Card("FIVEC", "Clubs", "5", 5));
        this.cards.push(new Card("FOURC", "Clubs", "4", 0));
        this.cards.push(new Card("THREEC", "Clubs", "3", 0));

        //hearts
        this.cards.push(new Card("AH", "Hearts", "A", 10));
        this.cards.push(new Card("KH", "Hearts", "K", 0));
        this.cards.push(new Card("QH", "Hearts", "Q", 0));
        this.cards.push(new Card("JH", "Hearts", "J", 0));
        this.cards.push(new Card("TENH", "Hearts", "10", 10));
        this.cards.push(new Card("NINEH", "Hearts", "9", 0));
        this.cards.push(new Card("EIGHTH", "Hearts", "8", 0));
        this.cards.push(new Card("SEVENH", "Hearts", "7", 0));
        this.cards.push(new Card("SIXH", "Hearts", "6", 0));
        this.cards.push(new Card("FIVEH", "Hearts", "5", 5));
        this.cards.push(new Card("FOURH", "Hearts", "4", 0));
        this.cards.push(new Card("THREEH", "Hearts", "3", 0));
        this.cards.push(new Card("TWOH", "Hearts", "2", 0));
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
        this.playerBid = 0;
        this.bidComplete = false;
        this.playerStack = []; //10 total cards
        this.playerHands = [];
        this.gamePoints = 0;
        this.totalPoints = 0;
        this.gamesWon = 0;
        this.rank = 0;
    }
}

class Game {

    constructor() {
        this.deck = new Deck();
        this.hands = []; //2D array of 10 hands of 5 cards each with player that played card
        this.players = []; // array of 5 total players
        //this.dealer = -1; // start dealer -1 so increment will correct this
        this.dealer = 0;
        this.leader = 0;
        this.partner = 3; // assign once card is chosen
        this.leadingBid = 0;
        this.cuttingSuit;
        this.partnerCard;
        this.winners = []; // winners of current game
        this.currentBidder = 0;
    }

    // finds card in the deck
    findCard(cardIndex) {
        for (let i = 0; i < this.deck.cards.length; i++) {
            if (this.deck.cards[i].index === cardIndex) {
                return this.deck.cards[i];
            }
        }    
    }

    // begins game by dealing cards
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

        this.players[0].playerStack = this.organizeStack(this.players[0].playerStack);
        this.players[1].playerStack = this.organizeStack(this.players[1].playerStack);
        this.players[2].playerStack = this.organizeStack(this.players[2].playerStack);
        this.players[3].playerStack = this.organizeStack(this.players[3].playerStack);
        this.players[4].playerStack = this.organizeStack(this.players[4].playerStack);
    }

    // organizes each player's stack
    organizeStack(stack) {
        let organizedStack = [];

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Spades" && stack[i].rank == "A") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Spades" && stack[i].rank == "K") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Spades" && stack[i].rank == "Q") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Spades" && stack[i].rank == "J") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Spades" && stack[i].rank == "10") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Spades" && stack[i].rank == "9") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Spades" && stack[i].rank == "8") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Spades" && stack[i].rank == "7") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Spades" && stack[i].rank == "6") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Spades" && stack[i].rank == "5") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Spades" && stack[i].rank == "4") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Spades" && stack[i].rank == "3") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Spades" && stack[i].rank == "2") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Diamonds" && stack[i].rank == "A") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Diamonds" && stack[i].rank == "K") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Diamonds" && stack[i].rank == "Q") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Diamonds" && stack[i].rank == "J") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Diamonds" && stack[i].rank == "10") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Diamonds" && stack[i].rank == "9") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Diamonds" && stack[i].rank == "8") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Diamonds" && stack[i].rank == "7") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Diamonds" && stack[i].rank == "6") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Diamonds" && stack[i].rank == "5") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Diamonds" && stack[i].rank == "4") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Diamonds" && stack[i].rank == "3") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Clubs" && stack[i].rank == "A") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Clubs" && stack[i].rank == "K") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Clubs" && stack[i].rank == "Q") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Clubs" && stack[i].rank == "J") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Clubs" && stack[i].rank == "10") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Clubs" && stack[i].rank == "9") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Clubs" && stack[i].rank == "8") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Clubs" && stack[i].rank == "7") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Clubs" && stack[i].rank == "6") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Clubs" && stack[i].rank == "5") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Clubs" && stack[i].rank == "4") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Clubs" && stack[i].rank == "3") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Hearts" && stack[i].rank == "A") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Hearts" && stack[i].rank == "K") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Hearts" && stack[i].rank == "Q") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Hearts" && stack[i].rank == "J") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Hearts" && stack[i].rank == "10") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Hearts" && stack[i].rank == "9") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Hearts" && stack[i].rank == "8") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Hearts" && stack[i].rank == "7") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Hearts" && stack[i].rank == "6") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Hearts" && stack[i].rank == "5") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Hearts" && stack[i].rank == "4") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Hearts" && stack[i].rank == "3") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        for (let i = 0; i < 10; i++) {
            if (stack[i].suit == "Hearts" && stack[i].rank == "2") {
                organizedStack.push(stack[i]);
                break;
            }
        }

        return (organizedStack);
    }

    // checks if bidding complete
    checkBiddingComplete() {
        
        let counter = 0;
        for (let i = 0; i < 5; i++) {
            if(this.players[i].bidComplete) {
                console.log(this.players[i].playerName);
                counter++;
            }
        }

        console.log("checked " + counter);
        if(counter >= 4) {
            return true;
        } else {
            return false;
        }
    }

    // bidding method, also sets leader, cutting suit, and partner card

    setLeader(bid) {

        if(this.leadingBid === 0) {
            this.leadingBid = bid;
            this.leader = this.dealer;
        }
        //let currentBidder = this.dealer;

        this.players[this.currentBidder].playerBid = bid;

        if (this.players[this.currentBidder].playerBid > this.leadingBid) {
            this.leadingBid = this.players[this.currentBidder].playerBid;
            this.leader = this.currentBidder;
        }

        if(bid === 0 ) {
            console.log("called " + this.players[this.currentBidder].playerName);
            this.players[this.currentBidder].bidComplete = true;
        }

        this.currentBidder++;
        // if(this.currentBidder > 4) {
        //     this.currentBidder = 0;
        // }

        for(let i = 0; i < this.players.length; i++) {
            if(this.currentBidder > 4) {
                this.currentBidder = 0;
            }
            if(this.players[this.currentBidder].bidComplete) {
                this.currentBidder++;
            } else {
                break;
            }
        }

        //this.dealer = 1;

        return [this.leadingBid, this.players[this.leader].playerName];
    }

    setupLeader(data) {
        this.cuttingSuit = data.suit;
        this.partnerCard = this.findCard(data.card);

        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 9; j++) {
                if (this.players[i].playerStack[j].index == this.partnerCard) {
                    this.partner = i;
                }
            }
        }
    }

    // must set card precendence based on cutting suit and which card was played first for each hand
    // precedence goes from low to high, smaller values have more precedence
    setCardPrecedence(hand) {

        let precedence = [];

        // first precedence: 2 of spades
        precedence[0] = this.findCard("TWOS");

        // second precedence: current cutting suit
        let secondPrecedence = this.cuttingSuit;

        // if cutting suit is Spades
        if (secondPrecedence === 'Spades') {
            precedence.push(this.findCard("AS"), this.findCard("KS"), this.findCard("QS"), this.findCard("JS"),
            this.findCard("TENS"), this.findCard("NINES"), this.findCard("EIGHTS"), this.findCard("SEVENS"),
            this.findCard("SIXS"), this.findCard("FIVES"), this.findCard("FOURS"), this.findCard("THREES"));
        }

        // if cutting suit is Diamonds
        else if (secondPrecedence === 'Diamonds') {
            precedence.push(this.findCard("AD"), this.findCard("KD"), this.findCard("QD"), this.findCard("JD"),
            this.findCard("TEND"), this.findCard("NINED"), this.findCard("EIGHTD"), this.findCard("SEVEND"),
            this.findCard("SIXD"), this.findCard("FIVED"), this.findCard("FOURD"), this.findCard("THREED"));
        }

         // if cutting suit is Clubs
        else if (secondPrecedence === 'Clubs') {
            precedence.push(this.findCard("AC"), this.findCard("KC"), this.findCard("QC"), this.findCard("JC"),
            this.findCard("TENC"), this.findCard("NINEC"), this.findCard("EIGHTC"), this.findCard("SEVENC"),
            this.findCard("SIXC"), this.findCard("FIVEC"), this.findCard("FOURC"), this.findCard("THREEC"));
        }

         // if cutting suit is Hearts
        else {
            precedence.push(this.findCard("AH"), this.findCard("KH"), this.findCard("QH"), this.findCard("JH"),
            this.findCard("TENH"), this.findCard("NINEH"), this.findCard("EIGHTH"), this.findCard("SEVENH"),
            this.findCard("SIXH"), this.findCard("FIVEH"), this.findCard("FOURH"), this.findCard("THREEH"), this.findCard("TWOH"));
        }

        // third precedence: starting card that was played
        let thirdPrecedence = hand[0][1].suit;

        // if starting card suit is Spades
        if (thirdPrecedence === 'Spades') {
            precedence.push(this.findCard("AS"), this.findCard("KS"), this.findCard("QS"), this.findCard("JS"),
            this.findCard("TENS"), this.findCard("NINES"), this.findCard("EIGHTS"), this.findCard("SEVENS"),
            this.findCard("SIXS"), this.findCard("FIVES"), this.findCard("FOURS"), this.findCard("THREES"));
        }

        // if starting card suit is Diamonds
        else if (thirdPrecedence === 'Diamonds') {
            precedence.push(this.findCard("AD"), this.findCard("KD"), this.findCard("QD"), this.findCard("JD"),
            this.findCard("TEND"), this.findCard("NINED"), this.findCard("EIGHTD"), this.findCard("SEVEND"),
            this.findCard("SIXD"), this.findCard("FIVED"), this.findCard("FOURD"), this.findCard("THREED"));
        }

         // if starting card suit is Clubs
        else if (thirdPrecedence === 'Clubs') {
            precedence.push(this.findCard("AC"), this.findCard("KC"), this.findCard("QC"), this.findCard("JC"),
            this.findCard("TENC"), this.findCard("NINEC"), this.findCard("EIGHTC"), this.findCard("SEVENC"),
            this.findCard("SIXC"), this.findCard("FIVEC"), this.findCard("FOURC"), this.findCard("THREEC"));
        }

         // if starting card suit is Hearts
        else {
            precedence.push(this.findCard("AH"), this.findCard("KH"), this.findCard("QH"), this.findCard("JH"),
            this.findCard("TENH"), this.findCard("NINEH"), this.findCard("EIGHTH"), this.findCard("SEVENH"),
            this.findCard("SIXH"), this.findCard("FIVEH"), this.findCard("FOURH"), this.findCard("THREEH"), this.findCard("TWOH"));
        }

        return precedence;
    }

    // determines who won the full hand, add that hand to their stack
    handPlay(hand) {

        this.hands.push(hand);

        // set card precedence for this hand based on cutting suit & starting card
        let precendence = this.setCardPrecedence(hand);

        // gives each card in the hand played a precedence value
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < precendence.length; j++) {
                if (hand[i][1] === precendence[j]) {
                    hand[i].push(j);
                }
            }
        }

        let handWinnerPrecedence = hand[0][2];
        let handWinner = 0;

        // finds which card has the highest precedence and makes the player of that card the winner of this hand
        for (let i = 0; i < 4; i++) {
            if (hand[i][2] < handWinnerPrecedence) {
                handWinnerPrecedence = hand[i][2];
                handWinner = i;
            }
        }

        this.players[handWinner].playerHands.push(hand);
    }

    // determines winner
    calculateGamePoints() {

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < this.players[i].playerHands.length; j++) {
                this.players[i].gamePoints += this.players[i].playerHands[j].points;
            }
                
            console.log(this.players[i].gamePoints);
        }
        
        let winningTotal = this.players[this.leader].gamePoints + this.players[this.partner].gamePoints;
        
        if (winningTotal >= this.leadingBid) {
            this.winners.push(this.players[this.leader]);
            this.winners.push(this.players[this.partner]);
            console.log("Leading team won!");
        } 
        else {
            for (let i = 0; i < 5; i++) {
                if (i != this.leader && i != this.partner) {
                    this.winners.push(this.players[i]);
                }
            }
            console.log("Defending team won!");
        }
    }

    // calculate total points, ranks for this ongoing game 
    setGameResults() {
        
        // update their total points
        for (let i = 0; i < 5; i++) {
            this.players[i].totalPoints += this.players[i].gamePoints;
            this.players[i].gamePoints = 0;
        }

        // update their games won
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < this.winners.length; j++) {
                if (this.players[i] === this.winners[j]) {
                    this.players[i].gamesWon++;
                }
            }
        }

        // update their ranks

        // test values, DELETE LATER
        this.players[0].totalPoints = 80;
        this.players[1].totalPoints = 120;
        this.players[2].totalPoints = 120;
        this.players[3].totalPoints = 70;
        this.players[4].totalPoints = 85;

        // ranks currently contains totalPoints of each player unordered
        // ranks should contain players ordered in order of their rank
        let ranks = [[this.players[0], this.players[0].totalPoints], [this.players[1], this.players[1].totalPoints],
                    [this.players[2], this.players[2].totalPoints], [this.players[3], this.players[3].totalPoints], 
                    [this.players[4], this.players[4].totalPoints]];

        // bubble sort to sort ranks
        let swapped, temp;

        for (let i = 0; i < 5; i++) {
            swapped = false;

            for (let j = 0; j < 5 - i - 1; j++) {
                if (ranks[j][1] < ranks[j+1][1]) {
                    temp = ranks[j];
                    ranks[j] = ranks[j+1];
                    ranks[j+1] = temp;
                    swapped = true;
                }
            }

            if (!swapped) {
                break;   
            }
        }

        // give each player their rank
        for (let i = 0; i < 5; i++) {
            ranks[i][0].rank = i + 1;
        }

        // MUST CHECK FOR TIES
    }

    // updates dealer for each next game
    updateDealer() {
        if (this.dealer < 4) {
            this.dealer++;
        }

        else {
            this.dealer = 0;
        }
    }

    // clear all data for a new game with same players
    setNextGame() {

        // leader, partner, leading bid, cutting suit, and partner card will be set by setLeader()

        // update the dealer
        this.updateDealer();

        // clear all current game data
        this.deck.cards.splice(0, this.deck.length);
        this.hands.splice(0, this.hands.length);
        
        // clear all player data
        for (let i = 0; i < 5; i++) {
            this.players[i].playerBid = 0;
            this.players[i].bidComplete = false;
            this.players[i].playerStack.splice(0, this.players[i].playerStack.length);
            this.players[i].playerHands.splice(0, this.players[i].playerHands.length);
        }
    }

    // must implement bidding and who won (leader, partner card, cutting suit) and prompting
    // must implement logic for who wins each hand (using precendence)
    // must implement non cheating methods (must play suit if you have it etc)
    // must implement logic for who gets to start the next hand 
    // must announce who partners are when the partner card gets played (revealed)
    // must implement logic for who won each game based on points
    // after each game, must update ranks (ties) & update dealer and start next game, clear all last game info
    // august 17-24 finish logic
    // august 24-31 finish frontend to test logic, finish codes stuff
    // september get provisional patent, server setup, deploy
}

module.exports = { Deck, Player, Game };