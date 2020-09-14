var express = require('express');
var router = express.Router();

var Main = require('../logic/Main');
var Game = require('../logic/RunGame');
var data = require('../logic/Data');

let Deck = Main.Deck;

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
    var index = data.getIndex(playerName) + 1;
    var cards = "p" + index.toString() + "StartingCards";

    var tempDeck = new Deck();
    tempDeck.createDeck;
    var otherCards = [];
    var card;
    var exists = false;

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 50; j++) {
            if (cards[i] == tempDeck.cards[j]) {
                card = tempDeck.cards[j];
                exists = true;
                break;
            }
        }
        if (!exists) {
            otherCards.append(card);
        }
        exists = false;
    }

    console.log(otherCards);
    res.send(otherCards);
});

module.exports = router;