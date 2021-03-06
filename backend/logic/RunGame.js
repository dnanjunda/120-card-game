var importGame = require('../logic/Main');
let Game = importGame.Game;
let Player = importGame.Player;

let game = new Game();

var index = 0;
var bidIndex = 0;
var handIndex = 0;
var players = [];
var handOrder = [];
var hand = [];
var handRound = 0;

let p1StartingCards = []; //10 total cards
let p2StartingCards = []; //10 total cards
let p3StartingCards = []; //10 total cards
let p4StartingCards = []; //10 total cards
let p5StartingCards = []; //10 total cards

function setHandOrder() {
    var leader = game.players[game.leader];
    handOrder.push(leader);

    var leaderIndex = getIndex(leader.playerName);

    for(let i = leaderIndex+1; i < players.length; i++) {
        handOrder.push(players[i]);
    }

    for(let j = 0; j < leaderIndex; j++) {
        handOrder.push(players[j]);
    }
}

function getNextPlayer() {
    return handOrder[handIndex].playerName;
}

function submitChoice(data) {
    var pushData = [handOrder[handIndex], handOrder[handIndex].playerStack[data.ind]];
    hand.push(pushData);
    handIndex++;
}

function handComplete() {
    if(handIndex > 4) {
        handIndex = 0;
        console.log(hand);
        game.handPlay(hand);
        hand = [];
        handRound++;
        return true;
    }
    return false;
}

function gameComplete() {
    if(handRound >= 10) {
        return true;
    }
    return false;
}

function updateDealer() {
    game.updateDealer();
    return game.players[game.dealer].playerName;
}

function finishGame() {
    game.calculateGamePoints();
}

function getIndex(player) {
    for(let i = 0; i < players.length; i++) {
        if(players[i].playerName === player) {
            return i;
        }
    }
}

function getPlayers() {
    return players;
}

function addPlayer(name) {
    var player = player + (index + 1).toString();
    player = new Player(name);
    players.push(player);
}

function checkBiddingComplete() {
    if(game.checkBiddingComplete()) {
        return true;
    } else {
        return false;
    }
}

function submitBid(bid) {
    //bidIndex++;
    return game.setLeader(bid);
}

function getNextBidder() {
    
    //console.log(game.players[game.currentBidder].playerName);
    return game.players[game.currentBidder].playerName;

    // if(bidIndex > 4) {
    //     bidIndex = 0;
    // }

    // for(let i = 0; i < game.players.length; i++) {
    //     if(game.players[bidIndex].bidComplete) {
    //         bidIndex++;
    //     } else {
    //         break;
    //     }
    // }
    // return bidIndex;
}

function setChoices(data) {
    game.setupLeader(data);
}

function startgame() {
    // if(players[1] == null) {
    //     players[1] = new Player("waiting");
    // }
    // if(players[2] == null) {
    //     players[2] = new Player("waiting");
    // }
    // if(players[3] == null) {
    //     players[3] = new Player("waiting");
    // }
    // if(players[4] == null) {
    //     players[4] = new Player("waiting");
    // }
    game.startGame(players[0], players[1], players[2], players[3], players[4]);

    p1StartingCards.push(game.players[0].playerStack[0].index);
    p1StartingCards.push(game.players[0].playerStack[1].index);
    p1StartingCards.push(game.players[0].playerStack[2].index);
    p1StartingCards.push(game.players[0].playerStack[3].index);
    p1StartingCards.push(game.players[0].playerStack[4].index);
    p1StartingCards.push(game.players[0].playerStack[5].index);
    p1StartingCards.push(game.players[0].playerStack[6].index);
    p1StartingCards.push(game.players[0].playerStack[7].index);
    p1StartingCards.push(game.players[0].playerStack[8].index);
    p1StartingCards.push(game.players[0].playerStack[9].index);

    p2StartingCards.push(game.players[1].playerStack[0].index);
    p2StartingCards.push(game.players[1].playerStack[1].index);
    p2StartingCards.push(game.players[1].playerStack[2].index);
    p2StartingCards.push(game.players[1].playerStack[3].index);
    p2StartingCards.push(game.players[1].playerStack[4].index);
    p2StartingCards.push(game.players[1].playerStack[5].index);
    p2StartingCards.push(game.players[1].playerStack[6].index);
    p2StartingCards.push(game.players[1].playerStack[7].index);
    p2StartingCards.push(game.players[1].playerStack[8].index);
    p2StartingCards.push(game.players[1].playerStack[9].index);

    p3StartingCards.push(game.players[2].playerStack[0].index);
    p3StartingCards.push(game.players[2].playerStack[1].index);
    p3StartingCards.push(game.players[2].playerStack[2].index);
    p3StartingCards.push(game.players[2].playerStack[3].index);
    p3StartingCards.push(game.players[2].playerStack[4].index);
    p3StartingCards.push(game.players[2].playerStack[5].index);
    p3StartingCards.push(game.players[2].playerStack[6].index);
    p3StartingCards.push(game.players[2].playerStack[7].index);
    p3StartingCards.push(game.players[2].playerStack[8].index);
    p3StartingCards.push(game.players[2].playerStack[9].index);

    p4StartingCards.push(game.players[3].playerStack[0].index);
    p4StartingCards.push(game.players[3].playerStack[1].index);
    p4StartingCards.push(game.players[3].playerStack[2].index);
    p4StartingCards.push(game.players[3].playerStack[3].index);
    p4StartingCards.push(game.players[3].playerStack[4].index);
    p4StartingCards.push(game.players[3].playerStack[5].index);
    p4StartingCards.push(game.players[3].playerStack[6].index);
    p4StartingCards.push(game.players[3].playerStack[7].index);
    p4StartingCards.push(game.players[3].playerStack[8].index);
    p4StartingCards.push(game.players[3].playerStack[9].index);

    p5StartingCards.push(game.players[4].playerStack[0].index);
    p5StartingCards.push(game.players[4].playerStack[1].index);
    p5StartingCards.push(game.players[4].playerStack[2].index);
    p5StartingCards.push(game.players[4].playerStack[3].index);
    p5StartingCards.push(game.players[4].playerStack[4].index);
    p5StartingCards.push(game.players[4].playerStack[5].index);
    p5StartingCards.push(game.players[4].playerStack[6].index);
    p5StartingCards.push(game.players[4].playerStack[7].index);
    p5StartingCards.push(game.players[4].playerStack[8].index);
    p5StartingCards.push(game.players[4].playerStack[9].index);
}

module.exports = { updateDealer, finishGame, gameComplete, handComplete, getNextPlayer, submitChoice, setHandOrder, addPlayer, startgame, checkBiddingComplete, submitBid, getNextBidder, getPlayers, setChoices, p1StartingCards, p2StartingCards, p3StartingCards, p4StartingCards, p5StartingCards }


