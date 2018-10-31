const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;
const schema = mongoose.Schema;

var cmtPostSchema = new schema({
    user : {type : objectId, ref : 'user'},
    event : {type : objectId, ref : 'event'},
    comment : String
});

module.exports = mongoose.model('cmt_post', cmtPostSchema);