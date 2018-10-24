const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;
const schema = mongoose.Schema;
const member = require('./user');

var groupSchema = new schema({
    name : String,
    intro : String,
    location_active : String,
    contact : String,
    avatarpath : String,
    coverpath : String,
    admin : {type : objectId, ref : 'user'},
    members : {type : [member.schema]}
});

module.exports = mongoose.model('group', groupSchema);