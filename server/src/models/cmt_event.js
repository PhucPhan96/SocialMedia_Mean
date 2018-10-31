const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;
const schema = mongoose.Schema;

var cmtEventSchema = new schema({
    user : {type : objectId, ref : 'user'},
    event : {type : objectId, ref : 'event'},
    comment : String
});

module.exports = mongoose.model('cmt_event', cmtEventSchema);
// var cmt_event = mongoose.model('cmt_event', cmtEventSchema);
//  module.exports = user;
//  user.create({
//     'user' : '{type : objectId, ref : 'user'}',
//     'event' : '{type : objectId, ref : 'event'}',
//     'comment' : 'String'
// }).then(()=>{
//     console.log('craete');
// }).catch((err)=>{
//     console.log('craete ' + err);
// });