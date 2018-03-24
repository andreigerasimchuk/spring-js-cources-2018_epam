const { openFile, readFile, writeFile } = require('./io');
const { getAllTodos } = require('./getAllTodos');
const { findCurrentTodo, createTodo, print, printEror } = require('./services');

module.exports = {
    openFile,
    readFile,
    writeFile,
    getAllTodos,
    findCurrentTodo,
    createTodo,
    print,
    printEror
}
