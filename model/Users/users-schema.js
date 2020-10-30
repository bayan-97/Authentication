const mongoose = require('mongoose');
const { unescape } = require('querystring');
const user = mongoose.Schema({
    username: { type: String, require: true },
    password: { type: String, required: true },
    role: { type: String, required: true },

});


module.exports = mongoose.model('user', user);