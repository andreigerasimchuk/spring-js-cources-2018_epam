const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title: String,
    description: String,
    comments: [],
    likes: Number
});

module.exports = mongoose.model('Todo', todoSchema);