var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('./db');
var router = require('./src/controllers/userController');
var user = require('./src/models/user');
var groupModel = require('./src/models/group');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send('Hello World!');
});

// app.post('/addUser', function (req, res) {
//     user = {
//         'firstname': 'Phan',
//         'lastname': 'Phuc',
//         'username': 'phucphan',
//         'password': '123456',
//         'email': 'phucphan@gmail.com',
//         'address': '1234 Quang Trung, Go Va',
//         'gender': 'Nam',
//         'birthday': '1996/7/1',
//         'about': 'oh yeah!',
//         'phone': '0373780102',
//         'job': 'dev',
//         'avatarpath': 'C:\img\avatar',
//         'coverpath': 'C:\img\cover'
//     };
//     var myData = new user(req.body);
//     myData.save(function (err, result) {
//         if (err) {
//             res.send("Error!");
//         }
//         else {
//             res.json(result);
//         }
//     });
// });

app.use(router);

app.listen(3200);