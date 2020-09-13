var express = require('express');
var router = express.Router();
var Game = require('../logic/RunGame');
var data = require('../logic/Data');

router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

{/*router.post('/start', function(req, res, next) {
    Game.dumb();
});*/}

router.post('/array', function(req, res, next) {
    // var objToSend = {
    //     array: Game.p1StartingCards,
    // }

    var playerName = req.body.name;

    var index = data.getIndex(playerName) + 1;

    var cards = "p" + index.toString() + "StartingCards";
    res.send(Game[cards]);
});

module.exports = router;