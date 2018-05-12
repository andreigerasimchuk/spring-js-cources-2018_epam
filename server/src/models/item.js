const mongoose = require('mongoose');

let itemSchema = mongoose.Schema({
    id: String,
    title: String,
    discription: String,
    isLiked: Boolean,
    isCompleted: Boolean,
    createdDate: String,
    lastUpdateDate: String,
    comments: Array,
});

module.exports = mongoose.model('Item', itemSchema);
