const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const coonfig = require('../config/db');
const {
    transformAuthInfo
} = require('passport');
const UserSchem = mongoose.Schema({
    user: {
        type: String
    },
    email: {
        type: String,
        require: true
    },
    login: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
})

// const User = module.exports = mongoose.model("User", UserSchem);
const User = mongoose.model("User", UserSchem);
module.exports = User;
module.exports.getUserByLogin = function (login, callback) {
    const query = {
        login,
        login
    };
    User.findOne(query, callback);
}

module.exports.getUserById = function (id, callback) {

    User.findById(id, callback);
};

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        })
    })
};

module.exports.comparePath = function (pathFromUser, userDBPath, callback) {
    bcrypt.compare(pathFromUser, userDBPath, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
};