const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;
const schema = mongoose.Schema;

var donateSchema = new schema({
    item : String,
    quality : Number,
    user : {type : objectId, ref : 'user'},
    event : {type : objectId, ref : 'event'},
});

module.exports = mongoose.model('donate', donateSchema);