const { openFile, readFile, writeFile } = require('./io');
const { getAllTodos } = require('./getAllTodos');
const { 
    findCurrentTodo, 
    createTodo, 
    print, 
    printError, 
    printTodos } = require('./services');

module.exports = {
    openFile,
    readFile,
    writeFile,
    getAllTodos,
    findCurrentTodo,
    createTodo,
    print,
    printError,
    printTodos
}
