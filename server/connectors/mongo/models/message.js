var mongoose = require('mongoose');
var Message = mongoose.model("Message", new mongoose.Schema({
    text: String,
    sendDate : Date
},{timestamps: true}));

module.exports = Message;