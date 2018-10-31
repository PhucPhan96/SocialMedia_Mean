const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;
const schema = mongoose.Schema;

var messageSchema = new schema({
    user_send : {type : objectId, ref : 'user'},
    user_receive : {type : objectId, ref : 'user'},
    message : String,
    time_send : Date
});

module.exports = mongoose.model('message', messageSchema);