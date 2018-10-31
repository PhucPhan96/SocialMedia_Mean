const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;
const schema = mongoose.Schema;

var likePostSchema = new schema({
    user : {type : objectId, ref : 'user'},
    event : {type : objectId, ref : 'event'}
});

module.exports = mongoose.model('like_post', likePostSchema);