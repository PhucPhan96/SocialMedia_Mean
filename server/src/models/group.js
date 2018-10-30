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
    admin : {type : objectId, ref : 'user', required: false}
});

// var group = mongoose.model('group', groupSchema);
//  module.exports = group;
//  group.create({
//     name : 'ddd',
//     intro : 'ddd',
//     location_active : 'ddd',
//     contact : 'ddd',
//     avatarpath : 'ddd',
//     coverpath : 'ddd',
//     admin : '5bd2db8205aa0e1b74ad46f1',
//     members : []
// }).then(()=>{
//     console.log('craete');
// }).catch((err)=>{
//     console.log('craete ' + err);
// });