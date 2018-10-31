const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;
const schema = mongoose.Schema;

var planDetailSchema = new schema({
    time : Date,
    work : String,
    cost : Number,
    plan : {type : objectId, ref : 'plan'},
});

module.exports = mongoose.model('plan_detail', planDetailSchema);