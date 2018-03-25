const { getAllTodos, printError, printTodos } = require('../services');

exports.list = (answers) => {
    getAllTodos()
        .then(todos => {
            printTodos(todos);
        })
        .catch(err => {
            printError(err);
        });
}