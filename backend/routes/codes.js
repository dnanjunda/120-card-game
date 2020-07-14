var express = require('express');
var router = express.Router();
var db = require('../db/dbmodels');

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

module.exports = router;