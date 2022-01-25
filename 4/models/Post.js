const mongoose = require("mongoose");

const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const post = new Schema({
    title: String,
    description: String
});

module.exports = mongoose.model('Post', post);