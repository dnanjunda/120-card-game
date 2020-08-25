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
    res.send(Game.p1StartingCards);
});

router.get('/testcard', function(req, res, next) {
    res.send(Game.testCard);
});

module.exports = router;