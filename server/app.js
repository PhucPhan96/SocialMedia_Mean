var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
var db = require('./db');
// var router = require('./src/controllers/userController');
// var user = require('./src/models/user');
// var groupModel = require('./src/models/group');
// var event = require('./src/models/event');
// var friend = require('./src/models/friend');
// var message = require('./src/models/message');
// var post = require('./src/models/post');
// var cmt_post = require('./src/models/cmt_post');
// var like_post = require('./src/models/like_post');
// var join_event = require('./src/models/join_event');
// var join_group = require('./src/models/join_group');
// var cmt_event = require('./src/models/cmt_event');
// var donate = require('./src/models/donate');
// var plan = require('./src/models/plan');
// var plan_detail = require('./src/models/plan_detail');
// var like_event = require('./src/models/like_event');

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.use(bodyParser.json());

var corsOptions = {
    // origin: 'http://localhost:4200',
    origin: '*',
    method: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    Header: 'Content-Type, Authorization, Content-Length, X-Requested-With, x-access-token'
}

app.use(cors(corsOptions));

const index = require('./src/router/index');
app.use('/', index); 
require('./src/router/routerUser.js')(app);

// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });

// app.use(router);

app.listen(3200);

module.exports = app;