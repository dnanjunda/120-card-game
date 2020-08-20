var express = require('express');
var router = express.Router();
var Game = require('../logic/Main.js');

router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

{/*router.post('/start', function(req, res, next) {
    Game.dumb();
});*/}

router.get('/array', function(req, res, next) {
    // var objToSend = {
    //     array: Game.p1StartingCards,
    // }
    res.send(Game.p1StartingCards);
});

module.exports = router;