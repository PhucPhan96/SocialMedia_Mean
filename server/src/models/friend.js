const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;
const schema = mongoose.Schema;

var friendSchema = new schema({
    user_one : {type : objectId, ref : 'user'},
    user_two : {type : objectId, ref : 'user'},
    status : String
});

module.exports = mongoose.model('friend', friendSchema);