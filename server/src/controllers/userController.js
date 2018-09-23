var express = require('express');
var router = express.Router();
var user = require('../models/user');

router.get('/getAllUser', function(req, res){
    user.getAllUser(function(err, result){
        if(err){
            res.send("Error!");
        }
        else{
            res.json(result);
        }
    })
});

router.get('/getUserByUsername/:username', function(req, res){
    user.find({'username' : req.params.username}, function(err, result){
        if(err){
            res.send("Error!");
        }
        else{
            res.json(result);
        }
    });
});

module.exports = router;