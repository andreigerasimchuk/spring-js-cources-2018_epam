const { openFile, readFile, writeFile } = require('./io');
const { getAllTodos } = require('./getAllTodos');
const { findCurrentTodo, createTodo } = require('./services');

module.exports = {
    openFile,
    readFile,
    writeFile,
    getAllTodos,
    findCurrentTodo,
    createTodo
}
