const mongoose = require('mongoose');
var userSchemas = new mongoose.Schema({
    username : String,
    password : String,
    email : String,
    age : Number
});
var User = module.exports = mongoose.model('userschemas', userSchemas);

module.exports.getAllUser = function(callback, limit){
    User.find(callback).limit(limit);
}

module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}