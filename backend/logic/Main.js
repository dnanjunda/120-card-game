const prompt = require('prompt');
prompt.start();

class Card {

    constructor(index, suit, rank, points, image) {
        this.index = index;
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
        this.cards.push(new Card(1, "Spades", "A", 10, "../cards/AS.png"));
        this.cards.push(new Card(2, "Spades", "K", 0, "../cards/KS.png"));
        this.cards.push(new Card(3, "Spades", "Q", 0, "../cards/QS.png"));
        this.cards.push(new Card(4, "Spades", "J", 0, "../cards/JS.png"));
        this.cards.push(new Card(5, "Spades", "10", 10, "../cards/10S.png"));
        this.cards.push(new Card(6, "Spades", "9", 0, "../cards/9S.png"));
        this.cards.push(new Card(7, "Spades", "8", 0, "../cards/8S.png"));
        this.cards.push(new Card(8, "Spades", "7", 0, "../cards/7S.png"));
        this.cards.push(new Card(9, "Spades", "6", 0, "../cards/6S.png"));
        this.cards.push(new Card(10, "Spades", "5", 5, "../cards/5S.png"));
        this.cards.push(new Card(11, "Spades", "4", 0, "../cards/4S.png"));
        this.cards.push(new Card(12, "Spades", "3", 0, "../cards/3S.png"));
        this.cards.push(new Card(13, "Spades", "2", 20, "../cards/2S.png"));

        //diamonds
        this.cards.push(new Card(14, "Diamonds", "A", 10, "../cards/AD.png"));
        this.cards.push(new Card(15, "Diamonds", "K", 0, "../cards/KD.png"));
        this.cards.push(new Card(16, "Diamonds", "Q", 0, "../cards/QD.png"));
        this.cards.push(new Card(17, "Diamonds", "J", 0, "../cards/JD.png"));
        this.cards.push(new Card(18, "Diamonds", "10", 10, "../cards/10D.png"));
        this.cards.push(new Card(19, "Diamonds", "9", 0, "../cards/9D.png"));
        this.cards.push(new Card(20, "Diamonds", "8", 0, "../cards/8D.png"));
        this.cards.push(new Card(21, "Diamonds", "7", 0, "../cards/7D.png"));
        this.cards.push(new Card(22, "Diamonds", "6", 0, "../cards/6D.png"));
        this.cards.push(new Card(23, "Diamonds", "5", 5, "../cards/5D.png"));
        this.cards.push(new Card(24, "Diamonds", "4", 0, "../cards/4D.png"));
        this.cards.push(new Card(25, "Diamonds", "3", 0, "../cards/3D.png"));

        //clubs
        this.cards.push(new Card(26, "Clubs", "A", 10, "../cards/AC.png"));
        this.cards.push(new Card(27, "Clubs", "K", 0, "../cards/KC.png"));
        this.cards.push(new Card(28, "Clubs", "Q", 0, "../cards/QC.png"));
        this.cards.push(new Card(29, "Clubs", "J", 0, "../cards/JC.png"));
        this.cards.push(new Card(30, "Clubs", "10", 10, "../cards/10C.png"));
        this.cards.push(new Card(31, "Clubs", "9", 0, "../cards/9C.png"));
        this.cards.push(new Card(32, "Clubs", "8", 0, "../cards/8C.png"));
        this.cards.push(new Card(33, "Clubs", "7", 0, "../cards/7C.png"));
        this.cards.push(new Card(34, "Clubs", "6", 0, "../cards/6C.png"));
        this.cards.push(new Card(35, "Clubs", "5", 5, "../cards/5C.png"));
        this.cards.push(new Card(36, "Clubs", "4", 0, "../cards/4C.png"));
        this.cards.push(new Card(37, "Clubs", "3", 0, "../cards/3C.png"));

        //hearts
        this.cards.push(new Card(38, "Hearts", "A", 10, "../cards/AH.png"));
        this.cards.push(new Card(39, "Hearts", "K", 0, "../cards/KH.png"));
        this.cards.push(new Card(40, "Hearts", "Q", 0, "../cards/QH.png"));
        this.cards.push(new Card(41, "Hearts", "J", 0, "../cards/JH.png"));
        this.cards.push(new Card(42, "Hearts", "10", 10, "../cards/10H.png"));
        this.cards.push(new Card(43, "Hearts", "9", 0, "../cards/9H.png"));
        this.cards.push(new Card(44, "Hearts", "8", 0, "../cards/8H.png"));
        this.cards.push(new Card(45, "Hearts", "7", 0, "../cards/7H.png"));
        this.cards.push(new Card(46, "Hearts", "6", 0, "../cards/6H.png"));
        this.cards.push(new Card(47, "Hearts", "5", 5, "../cards/5H.png"));
        this.cards.push(new Card(48, "Hearts", "4", 0, "../cards/4H.png"));
        this.cards.push(new Card(49, "Hearts", "3", 0, "../cards/3H.png"));
        this.cards.push(new Card(50, "Hearts", "2", 0, "../cards/2H.png"));
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
        this.dealer = 0;
        this.leader = 0;
        this.partner = 3; // assign once card is chosen
        this.leadingBid = 70;
        this.cuttingSuit;
        this.partnerCard;
        this.winners = []; // winners of current game
    }

    // finds card in the deck
    findCard(cardIndex) {
        for (let i = 0; i < this.deck.cards.length; i++) {
            if (this.deck.cards[i].index == cardIndex) {
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

        for (let i = 0; i < 5; i++) {
            if(!(this.players[i].bidComplete)) {
                return false;
            }
        }
        return true;
    }

    // bidding method, also sets leader, cutting suit, and partner card
    setLeader() {

        let bidders = 5;
        let currentBidder = this.dealer;

        let leadingPlayerIndex = this.dealer;
        let leadingBid = 70;

        while (bidders > 1) {

            // check if bidding is complete
            if(this.checkBiddingComplete()) {
                break;
            }

            prompt.get(['bid'], function(err, result) {
                if (err) {
                    console.log(err);
                    return 1;
                }
                //this.players[currentBidder].playerBid = result.bid;
                //console.log(this.players[currentBidder].playerName, result.bid);
                console.log(result.bid);
            })

            if (this.players[currentBidder].playerBid > leadingBid) {
                leadingBid = this.players[currentBidder].playerBid;
                leadingPlayerIndex = currentBidder;
            }

            else {
                this.players[currentBidder].bidComplete = true;
                bidders--;
            }

            while (this.players[currentBidder].bidComplete) {
                currentBidder++;

                if (currentBidder > 4) {
                    currentBidder = 0;
                }
            }
        }

        this.leader = leadingPlayerIndex;
        this.leadingBid = leadingBid;

        // when we set the leader, we also have to set cutting suit and partner card
        // setting manually for now
        this.cuttingSuit = 'Spades';
        this.partnerCard = this.findCard(13);

        // assign the partner
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 9; j++) {
                if (this.players[i].playerStack[j].index == 13) {
                    this.partner = i;
                }
            }
        }
    }

    // must set card precendence based on cutting suit and which card was played first for each hand
    // precedence goes from low to high, smaller values have more precedence
    setCardPrecedence(hand) {

        let precedence = [];
        let totalCards = 0;

        // first precedence: 2 of spades
        precedence[0] = this.findCard(13);

        // second precedence: current cutting suit
        let secondPrecedence = this.cuttingSuit;

        // if cutting suit is Spades
        if (secondPrecedence === 'Spades') {
            for (let i = 1; i <= totalCards; i++) {
                precedence.push(this.findCard(i));
            }
        }

        // if cutting suit is Diamonds
        else if (secondPrecedence === 'Diamonds') {
            totalCards = 25;
            for (let i = 14; i <= totalCards; i++) {
                precedence.push(this.findCard(i));
            }
        }

         // if cutting suit is Clubs
        else if (secondPrecedence === 'Clubs') {
            totalCards = 37;
            for (let i = 26; i <= totalCards; i++) {
                precedence.push(this.findCard(i));
            }
        }

         // if cutting suit is Hearts
        else {
            totalCards = 50;
            for (let i = 38; i <= totalCards; i++) {
                precedence.push(this.findCard(i));
            }
        }

        // third precedence: starting card that was played
        let thirdPrecedence = hand[0][1].suit;

        // if starting card suit is Spades
        if (thirdPrecedence === 'Spades') {
            for (let i = 1; i <= totalCards; i++) {
                precedence.push(this.findCard(i));
            }
        }

        // if starting card suit is Diamonds
        else if (thirdPrecedence === 'Diamonds') {
            totalCards = 25;
            for (let i = 14; i <= totalCards; i++) {
                precedence.push(this.findCard(i));
            }
        }

         // if starting card suit is Clubs
        else if (thirdPrecedence === 'Clubs') {
            totalCards = 37;
            for (let i = 26; i <= totalCards; i++) {
                precedence.push(this.findCard(i));
            }
        }

         // if starting card suit is Hearts
        else {
            totalCards = 50;
            for (let i = 38; i <= totalCards; i++) {
                precedence.push(this.findCard(i));
            }
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
    // after each game, must update ranks & update dealer and start next game, clear all last game info
    // august 17-24 finish logic
    // august 24-31 finish frontend to test logic, finish codes stuff
    // september get provisional patent, server setup, deploy
}

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

game.setLeader();

// hardcoded what card they played
hand = [[playerOne, playerOne.playerStack[0]], [playerTwo, playerTwo.playerStack[0]], [playerThree, playerThree.playerStack[0]], 
    [playerFour, playerFour.playerStack[0]], [playerFive, playerFive.playerStack[0]]];

game.handPlay(hand);

game.setNextGame();

//console.log(game.leader);
//console.log(game.leadingBid);
//console.log(game.players);
//console.log(game.players[0].playerStack[0].image);
//console.log(game.players[0].playerStack);
//console.log(p1StartingCards); 

game.setGameResults();

module.exports = { p1StartingCards };