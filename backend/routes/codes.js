var express = require('express');
var router = express.Router();
var db = require('../db/dbmodels');
var data = require('../logic/Data');

router.post('/addcode', function(req, res, next) {
    var newCode = {code: req.body.code};

    db.findCode(newCode).then(function(code) {
        if(!code) {
            db.sendData(newCode);
            res.json({result: "code added!"});
            res.send(result);
        } else {
            return res.status(400).json("code already exists");
        }
    })
});

router.post('/getcode', function(req, res, next) {
    var joinCode = {code: req.body.code};

    db.findCode(joinCode).then(function(code) {
        if(!code) {
            return res.status(400).json("code doesn't exist");
        } else {
            res.json({result: "join successful!"});
            res.send(result);
        }
    })
});

router.get('/getplayers', function(req, res, next) {
    var dataToSend = data.getPlayers();
    res.send(JSON.stringify(dataToSend));
});

module.exports = router;