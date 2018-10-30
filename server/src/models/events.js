const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;
const schema = mongoose.Schema;

var eventSchema = new schema({
    title : String,
    time_create : Date,
    content : String,
    imgpath : String,
    event_start : Date,
    event_end : Date,
    event_address : String,
    totalcost : Number,
    user_create : {type : objectId, ref : 'user'},
    group : {type : objectId, ref : 'group'}
});

module.exports = mongoose.model('event', eventSchema);