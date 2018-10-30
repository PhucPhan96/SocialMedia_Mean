const mongoose = require('mongoose');
const schema = mongoose.Schema;

var userSchemas = new schema({
    firstname : String,
    lastname : String,
    username : String,
    password : String,
    email : String,
    address : String,
    gender : String,
    birthday : Date,
    about : String,
    phone : String,
    job : String,
    avatarpath : String,
    coverpath : String,
    // group : {type : objectId, ref : 'group'} 
});

var user = mongoose.model('user', userSchemas);
 module.exports = user;
 user.create({
        'firstname': 'Phan',
        'lastname': 'Phuc',
        'username': 'phucphan',
        'password': '123456',
        'email': 'phucphan@gmail.com',
        'address': '1234 Quang Trung, Go Va',
        'gender': 'Nam',
        'birthday': '1996/7/1',
        'about': 'oh yeah!',
        'phone': '0373780102',
        'job': 'dev',
        'avatarpath': 'C:\img\avatar',
        'coverpath': 'C:\img\cover'
}).then(()=>{
    console.log('craete');
}).catch((err)=>{
    console.log('craete ' + err);
});