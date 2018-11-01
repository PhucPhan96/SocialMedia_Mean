'use strict';
const UsersController = require('../controllers/userController.js');

module.exports = (app) => {
    app.route('/getAllUsers')
        .get(UsersController.getAllUser);
    app.route('/login/:username')
        .get(UsersController.login);
};