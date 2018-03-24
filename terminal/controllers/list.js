const { getAllTodos, printEror } = require('../services');

exports.list = (answers) => {
    getAllTodos()
        .then(todos => {
            console.info(todos);
        })
        .catch(err => {
            printEror(err);
        });
}