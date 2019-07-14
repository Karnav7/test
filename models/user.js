'use strict';
var mongoose = require('mongoose');
// const mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        default: ''
    },
    contactno: {
        type: Number,
        default: null
    },
    email: {
        type: String,
        default: ''
    }
});

var user = mongoose.model('user', userSchema);

module.exports = user;

module.exports.addUser = function(newUser, callback) {
    // bcrypt.genSalt(10, (err, salt) => {
    //     bcrypt.hash(newUser.password, salt, (err, hash) => {
    //         if (err) throw err;
    //         newUser.password = hash;
    //         newUser.save(callback);
    //     });
    // });
    newUser.save(callback);
}