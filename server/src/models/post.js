const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;
const schema = mongoose.Schema;

var postSchema = new schema({
    title : String,
    time_create : Date,
    content : String,
    img_path : String,
    group : {type : objectId, ref : 'group'},
    user : {type : objectId, ref : 'user'}
});

module.exports = mongoose.model('post', postMessage);