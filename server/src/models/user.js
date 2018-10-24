const mongoose = require('mongoose');
const schema = mongoose.Schema;

var userSchemas = new schema({
    firstname : String,
    lastname : String,
    username : String,
    password : String,
    email : String,
    address : String,
    gender : String,
    birthday : Date,
    about : String,
    phone : String,
    job : String,
    avatarpath : String,
    coverpath : String,
    // group : {type : objectId, ref : 'group'} 
});
module.exports = mongoose.model('user', userSchemas);