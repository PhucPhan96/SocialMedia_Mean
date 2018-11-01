'use strict';
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Users = require('../models/user.js');
const jwt = require('jsonwebtoken');

var users = {
    getAllUser: (req, res) => {
        Users.find({})
            .then((data) => { res.json({data})} )
            .catch((err) => { res.json({ result: 0, msg: 'Server error', data: {} }); console.log(err); })
    },
    login:(req, res) =>{
        Users.findOne({'username' : req.params.username}, function(err, result){
            if (err) {
                res.send("Error!");
            }
            else {
                res.json(result);
            }
        });
    }
};
module.exports = users;