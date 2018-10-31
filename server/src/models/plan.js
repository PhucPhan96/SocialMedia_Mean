const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;
const schema = mongoose.Schema;

var planSchema = new schema({
    event : {type : objectId, ref : 'event'},
});

module.exports = mongoose.model('plan', planSchema);