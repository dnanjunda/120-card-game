var express = require('express');
var router = express.Router();

var Main = require('../logic/Main');
var Game = require('../logic/RunGame');
var data = require('../logic/Data');

let Deck = Main.Deck;
let tempDeck = new Deck();

router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

router.post('/array', function(req, res, next) {
    var playerName = req.body.name;
    var index = data.getIndex(playerName) + 1;
    var cards = "p" + index.toString() + "StartingCards";
    res.send(Game[cards]);
});

router.post('/otherPlayerCards', function(req, res, next) {
    var playerName = req.body.name;
    console.log(playerName);
    var index = data.getIndex(playerName) + 1;
    var cardname = "p" + index.toString() + "StartingCards";
    var playerCards = Game[cardname];

    tempDeck.createDeck();

    var otherCards = [];
    var card;
    var exists = false;

    for (let i = 0; i < 50; i++) {
        for (let j = 0; j < 10; j++) {
            if (tempDeck.cards[i].index === playerCards[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            card = tempDeck.cards[i].index;
            otherCards.push(card);
        }
        exists = false;
    }

    console.log(otherCards);
    res.send(otherCards);
});

module.exports = router;