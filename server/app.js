var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./db');
var router = require('./src/controllers/userController');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use(router);

app.listen(3200);