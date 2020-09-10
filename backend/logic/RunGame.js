var importGame = require('../logic/Main');
let Game = importGame.Game;
let Player = importGame.Player;

let game = new Game();

var index = 0;
var bidIndex = 0;
var players = [];

let p1StartingCards = []; //10 total cards
let p2StartingCards = []; //10 total cards
let p3StartingCards = []; //10 total cards
let p4StartingCards = []; //10 total cards
let p5StartingCards = []; //10 total cards

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
    bidIndex++;
    return game.setLeader(bid);
}

function getNextBidder() {
    return bidIndex;
}

function startgame() {
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

module.exports = { addPlayer, startgame, checkBiddingComplete, submitBid, getNextBidder, p1StartingCards, p2StartingCards, p3StartingCards, p4StartingCards, p5StartingCards }


