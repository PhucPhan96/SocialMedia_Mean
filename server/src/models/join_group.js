const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;
const schema = mongoose.Schema;

var joinGroupSchema = new schema({
    user : {type : objectId, ref : 'user'},
    group : {type : objectId, ref : 'group'},
    date_join : Date,
    status : String
});

module.exports = mongoose.model('join_group', joinGroupSchema);