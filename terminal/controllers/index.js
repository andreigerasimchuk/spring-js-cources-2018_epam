const { create } = require('./create');
const { list } = require('./list');
const { remove } = require('./remove');
const { like } = require('./like');
const { comment } = require('./comment');

module.exports = {
    create,
    list,
    remove,
    like,
    comment
};